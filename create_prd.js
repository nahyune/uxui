const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, VerticalAlign, PageNumber, PageBreak, LevelFormat,
  TableOfContents, ExternalHyperlink
} = require('docx');
const fs = require('fs');

const ACCENT = "5CB85C";    // MOTIMO 그린
const DARK   = "1A1A1A";
const GRAY   = "666666";
const LIGHT_GREEN = "E8F5E9";
const LIGHT_GRAY  = "F5F5F5";
const WHITE  = "FFFFFF";

const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };
const noBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };

function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 360, after: 120 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: ACCENT, space: 4 } },
    children: [new TextRun({ text, font: "Malgun Gothic", size: 32, bold: true, color: DARK })]
  });
}

function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 280, after: 80 },
    children: [new TextRun({ text, font: "Malgun Gothic", size: 26, bold: true, color: DARK })]
  });
}

function h3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 200, after: 60 },
    children: [new TextRun({ text, font: "Malgun Gothic", size: 22, bold: true, color: "444444" })]
  });
}

function body(text, color) {
  return new Paragraph({
    spacing: { before: 60, after: 60 },
    children: [new TextRun({ text, font: "Malgun Gothic", size: 20, color: color || DARK })]
  });
}

function bullet(text, bold) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { before: 40, after: 40 },
    children: [new TextRun({ text, font: "Malgun Gothic", size: 20, bold: !!bold, color: DARK })]
  });
}

function sub_bullet(text) {
  return new Paragraph({
    numbering: { reference: "sub-bullets", level: 0 },
    spacing: { before: 30, after: 30 },
    children: [new TextRun({ text, font: "Malgun Gothic", size: 19, color: GRAY })]
  });
}

function spacer() {
  return new Paragraph({ spacing: { before: 60, after: 60 }, children: [new TextRun("")] });
}

function labeledRow(label, value, shade) {
  const bg = shade ? LIGHT_GRAY : WHITE;
  return new TableRow({
    children: [
      new TableCell({
        borders, width: { size: 2500, type: WidthType.DXA },
        shading: { fill: bg, type: ShadingType.CLEAR },
        margins: { top: 80, bottom: 80, left: 120, right: 120 },
        children: [new Paragraph({ children: [new TextRun({ text: label, font: "Malgun Gothic", size: 19, bold: true, color: DARK })] })]
      }),
      new TableCell({
        borders, width: { size: 6860, type: WidthType.DXA },
        shading: { fill: bg, type: ShadingType.CLEAR },
        margins: { top: 80, bottom: 80, left: 120, right: 120 },
        children: [new Paragraph({ children: [new TextRun({ text: value, font: "Malgun Gothic", size: 19, color: DARK })] })]
      }),
    ]
  });
}

function headerRow(cols, widths) {
  return new TableRow({
    tableHeader: true,
    children: cols.map((col, i) => new TableCell({
      borders,
      width: { size: widths[i], type: WidthType.DXA },
      shading: { fill: ACCENT, type: ShadingType.CLEAR },
      margins: { top: 80, bottom: 80, left: 120, right: 120 },
      children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: col, font: "Malgun Gothic", size: 19, bold: true, color: WHITE })] })]
    }))
  });
}

function dataRow(cells, widths, shade) {
  const bg = shade ? LIGHT_GRAY : WHITE;
  return new TableRow({
    children: cells.map((cell, i) => new TableCell({
      borders,
      width: { size: widths[i], type: WidthType.DXA },
      shading: { fill: bg, type: ShadingType.CLEAR },
      margins: { top: 80, bottom: 80, left: 120, right: 120 },
      children: [new Paragraph({ alignment: i === 0 ? AlignmentType.LEFT : AlignmentType.CENTER, children: [new TextRun({ text: cell, font: "Malgun Gothic", size: 19, color: DARK })] })]
    }))
  });
}

function sectionTag(text) {
  return new Paragraph({
    spacing: { before: 80, after: 80 },
    children: [
      new TextRun({ text: `  ${text}  `, font: "Malgun Gothic", size: 18, bold: true, color: WHITE,
        shading: { fill: ACCENT, type: ShadingType.CLEAR } })
    ]
  });
}

const doc = new Document({
  numbering: {
    config: [
      { reference: "bullets",
        levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "sub-bullets",
        levels: [{ level: 0, format: LevelFormat.BULLET, text: "◦", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 1080, hanging: 360 } } } }] },
      { reference: "numbers",
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
    ]
  },
  styles: {
    default: { document: { run: { font: "Malgun Gothic", size: 20 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, font: "Malgun Gothic", color: DARK },
        paragraph: { spacing: { before: 360, after: 120 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, font: "Malgun Gothic", color: DARK },
        paragraph: { spacing: { before: 280, after: 80 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 22, bold: true, font: "Malgun Gothic", color: "444444" },
        paragraph: { spacing: { before: 200, after: 60 }, outlineLevel: 2 } },
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: ACCENT, space: 4 } },
          children: [
            new TextRun({ text: "MOTIMO  ", font: "Malgun Gothic", size: 20, bold: true, color: ACCENT }),
            new TextRun({ text: "Product Requirements Document", font: "Malgun Gothic", size: 20, color: GRAY }),
          ]
        })]
      })
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          border: { top: { style: BorderStyle.SINGLE, size: 2, color: "CCCCCC", space: 4 } },
          children: [
            new TextRun({ text: "Confidential | MOTIMO v1.0 | ", font: "Malgun Gothic", size: 18, color: GRAY }),
            new TextRun({ children: [PageNumber.CURRENT], font: "Malgun Gothic", size: 18, color: GRAY }),
            new TextRun({ text: " / ", font: "Malgun Gothic", size: 18, color: GRAY }),
            new TextRun({ children: [PageNumber.TOTAL_PAGES], font: "Malgun Gothic", size: 18, color: GRAY }),
          ]
        })]
      })
    },
    children: [
      // ─── 표지 ───────────────────────────────────────────────
      new Paragraph({
        spacing: { before: 1200, after: 0 },
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "MOTIMO", font: "Malgun Gothic", size: 72, bold: true, color: ACCENT })]
      }),
      new Paragraph({
        spacing: { before: 160, after: 0 },
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "소셜 투자 챌린지 앱", font: "Malgun Gothic", size: 36, color: DARK })]
      }),
      new Paragraph({
        spacing: { before: 320, after: 0 },
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "Product Requirements Document (PRD)", font: "Malgun Gothic", size: 24, color: GRAY })]
      }),
      spacer(),
      new Table({
        width: { size: 5000, type: WidthType.DXA },
        columnWidths: [2000, 3000],
        alignment: AlignmentType.CENTER,
        rows: [
          labeledRow("버전", "v1.0"),
          labeledRow("작성일", "2026-05-04", true),
          labeledRow("상태", "초안 (Draft)"),
          labeledRow("작성자", "UX/UI 기획팀", true),
          labeledRow("검토자", "-"),
        ]
      }),

      new Paragraph({ children: [new PageBreak()] }),

      // ─── 목차 ───────────────────────────────────────────────
      h1("목차"),
      new TableOfContents("목차", { hyperlink: true, headingStyleRange: "1-3" }),

      new Paragraph({ children: [new PageBreak()] }),

      // ─── 1. 제품 개요 ─────────────────────────────────────
      h1("1. 제품 개요"),

      h2("1.1 제품 비전"),
      body("MOTIMO는 개인 투자와 저축을 소셜 챌린지 형태로 즐길 수 있는 모바일 핀테크 앱입니다."),
      body("사용자는 투자 목표를 설정하고, 친구들과 함께 챌린지에 참여하며, 실시간 수익률을 추적할 수 있습니다."),
      body('"함께하면 더 쉬워지는 투자 습관" — 재미와 동기부여를 통해 건강한 재테크 문화를 만든다.'),
      spacer(),

      h2("1.2 제품 정보"),
      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [2500, 6860],
        rows: [
          labeledRow("앱 이름", "MOTIMO (모티모)"),
          labeledRow("플랫폼", "iOS / Android (모바일 네이티브)", true),
          labeledRow("주요 컬러", "라임 그린 (#5CB85C) + 화이트"),
          labeledRow("타겟 사용자", "20~40대 투자 입문자 및 소셜 활동을 즐기는 직장인", true),
          labeledRow("핵심 기능", "투자 잔액 관리, 수익률 추적, 소셜 챌린지, 친구 연결"),
          labeledRow("비즈니스 모델", "수수료 기반 투자 중개 + 프리미엄 챌린지 구독", true),
        ]
      }),
      spacer(),

      h2("1.3 목표 지표 (KPI)"),
      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [4000, 2680, 2680],
        rows: [
          headerRow(["지표", "런칭 목표 (3개월)", "성장 목표 (12개월)"], [4000, 2680, 2680]),
          dataRow(["MAU (월간 활성 사용자)", "50,000", "500,000"], [4000, 2680, 2680]),
          dataRow(["챌린지 참여율", "30%", "60%"], [4000, 2680, 2680], true),
          dataRow(["친구 연결 평균", "3명", "8명"], [4000, 2680, 2680]),
          dataRow(["D30 리텐션", "25%", "45%"], [4000, 2680, 2680], true),
          dataRow(["평균 투자 금액", "54,000원", "150,000원"], [4000, 2680, 2680]),
        ]
      }),

      new Paragraph({ children: [new PageBreak()] }),

      // ─── 2. 사용자 분석 ───────────────────────────────────
      h1("2. 사용자 분석"),

      h2("2.1 타겟 사용자 페르소나"),

      h3("페르소나 A — 투자 입문자"),
      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [2500, 6860],
        rows: [
          labeledRow("이름 / 나이", "김민준 / 27세"),
          labeledRow("직업", "마케터 (3년차 직장인)", true),
          labeledRow("목표", "월 10만원씩 소액 투자 시작, 재테크 습관 만들기"),
          labeledRow("Pain Point", "투자가 어렵고 막막함, 혼자 하면 금방 포기", true),
          labeledRow("Motivation", "친구들과 함께하면 더 지속 가능할 것 같다"),
        ]
      }),
      spacer(),

      h3("페르소나 B — 중급 투자자"),
      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [2500, 6860],
        rows: [
          labeledRow("이름 / 나이", "이서연 / 34세"),
          labeledRow("직업", "개발자 (스타트업 재직)", true),
          labeledRow("목표", "수익률 극대화, 포트폴리오 다변화"),
          labeledRow("Pain Point", "수익률 비교 도구 부족, 투자 커뮤니티 정보 신뢰도 낮음", true),
          labeledRow("Motivation", "신뢰할 수 있는 지인 네트워크 기반 투자 정보 공유"),
        ]
      }),
      spacer(),

      h2("2.2 사용자 여정 맵"),
      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [1800, 1760, 1800, 1800, 2200],
        rows: [
          headerRow(["인지", "탐색", "가입/온보딩", "활성 사용", "지속 참여"], [1800, 1760, 1800, 1800, 2200]),
          dataRow(["SNS 광고\n친구 추천", "앱 설치\n기능 둘러보기", "계좌 연결\n첫 챌린지 참여", "일일 잔액 확인\n친구 투자 피드", "챌린지 연장\n새 친구 초대"], [1800, 1760, 1800, 1800, 2200], true),
        ]
      }),

      new Paragraph({ children: [new PageBreak()] }),

      // ─── 3. 기능 요구사항 ─────────────────────────────────
      h1("3. 기능 요구사항"),

      h2("3.1 앱 정보 구조 (IA)"),
      body("하단 내비게이션 4개 탭으로 구성됩니다."),
      spacer(),
      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [1800, 2000, 5560],
        rows: [
          headerRow(["탭", "화면명", "주요 기능"], [1800, 2000, 5560]),
          dataRow(["홈 (Home)", "대시보드", "투자 가능 금액, 챌린지 현황, CTA 버튼"], [1800, 2000, 5560]),
          dataRow(["수익률", "포트폴리오", "누적 수익, 수익률 차트, 보유 종목 목록"], [1800, 2000, 5560], true),
          dataRow(["친구", "소셜 피드", "친구 투자 활동, 채팅, 챌린지 공유"], [1800, 2000, 5560]),
          dataRow(["설정", "마이페이지", "프로필, 계좌 관리, 알림, 고객센터"], [1800, 2000, 5560], true),
        ]
      }),
      spacer(),

      h2("3.2 홈 화면 (대시보드)"),
      sectionTag("F-01"),
      h3("3.2.1 투자 가능 금액 표시"),
      bullet("화면 상단에 현재 투자 가능한 잔액을 원화(원)로 표시", true),
      sub_bullet("예시: '지금 살 수 있는 금액 54,300원'"),
      sub_bullet("금액은 실시간 연동 (계좌 잔액 기준)"),
      bullet("'지금 살 수 있어요' CTA 버튼으로 즉시 투자 진행 가능"),
      sub_bullet("버튼 컬러: Primary 그린 (#5CB85C)"),
      spacer(),

      sectionTag("F-02"),
      h3("3.2.2 무료 충전 챌린지"),
      bullet("무료 충전 포인트를 적립하는 챌린지 섹션 제공", true),
      sub_bullet("챌린지 목표, 진행률 바(Progress bar) 표시"),
      sub_bullet("달성 시 투자 가능 포인트 지급"),
      bullet("챌린지 상세 화면으로 이동하는 링크 버튼"),
      spacer(),

      sectionTag("F-03"),
      h3("3.2.3 투자 추천 아이템"),
      bullet("홈 하단에 추천 투자 상품 카드형 목록 표시", true),
      sub_bullet("상품명, 현재가, 수익률, 등락 인디케이터 포함"),
      sub_bullet("최대 5개 카드 표시, 스크롤 지원"),
      spacer(),

      h2("3.3 수익률 화면"),
      sectionTag("F-04"),
      h3("3.3.1 포트폴리오 요약"),
      bullet("총 투자금액 및 현재 평가금액 표시", true),
      sub_bullet("예시: '총 잔고 118,630원'"),
      bullet("수익률(%) 및 손익금액(원) 실시간 업데이트"),
      bullet("'수익 실현하기' CTA 버튼 제공"),
      spacer(),

      sectionTag("F-05"),
      h3("3.3.2 수익률 차트"),
      bullet("기간별 수익률 바 차트 (일/주/월 탭 전환)", true),
      sub_bullet("양수 수익: 그린 바, 음수 수익: 레드 바"),
      sub_bullet("차트 터치 시 해당 기간 수익률 툴팁 표시"),
      bullet("하단에 보유 종목별 수익률 리스트 테이블"),
      sub_bullet("종목명, 보유수량, 평균단가, 현재가, 수익률(%) 포함"),
      spacer(),

      h2("3.4 친구 / 소셜 피드"),
      sectionTag("F-06"),
      h3("3.4.1 친구 목록 및 활동 피드"),
      bullet("팔로우한 친구들의 최근 투자 활동 타임라인 표시", true),
      sub_bullet("프로필 이미지, 닉네임, 투자 종목, 수익률 표시"),
      sub_bullet("좋아요(하트) 및 댓글 반응 기능"),
      bullet("상단 친구 검색 바 (닉네임/전화번호 검색)"),
      bullet("'친구 초대하기' 버튼 (카카오톡/문자 공유)"),
      spacer(),

      sectionTag("F-07"),
      h3("3.4.2 소셜 챌린지"),
      bullet("그룹 챌린지 생성 및 참여 기능", true),
      sub_bullet("챌린지 이름, 목표 금액, 기간, 참여 인원 설정"),
      sub_bullet("참여자 현황 및 순위 표시"),
      bullet("챌린지 완료 시 뱃지 획득 및 공유 기능"),
      spacer(),

      sectionTag("F-08"),
      h3("3.4.3 1:1 채팅"),
      bullet("친구와 1:1 채팅 기능", true),
      sub_bullet("투자 정보 텍스트 공유"),
      sub_bullet("채팅 내 투자 상품 카드 공유 기능"),
      spacer(),

      h2("3.5 설정 / 마이페이지"),
      sectionTag("F-09"),
      h3("3.5.1 프로필 관리"),
      bullet("프로필 이미지, 닉네임, 소개글 편집", true),
      bullet("투자 성향 태그 설정 (안정형 / 균형형 / 공격형)"),
      spacer(),

      sectionTag("F-10"),
      h3("3.5.2 계좌 연결 관리"),
      bullet("연결된 증권/은행 계좌 목록 표시", true),
      bullet("계좌 추가 / 해제 기능"),
      bullet("계좌 잔액 수동 새로고침"),
      spacer(),

      sectionTag("F-11"),
      h3("3.5.3 알림 설정"),
      bullet("푸시 알림 ON/OFF 토글 (항목별)", true),
      sub_bullet("수익률 변동 알림"),
      sub_bullet("친구 챌린지 초대 알림"),
      sub_bullet("무료 충전 챌린지 달성 알림"),
      spacer(),

      new Paragraph({ children: [new PageBreak()] }),

      // ─── 4. 비기능 요구사항 ───────────────────────────────
      h1("4. 비기능 요구사항"),

      h2("4.1 성능"),
      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [3000, 6360],
        rows: [
          headerRow(["항목", "요구사항"], [3000, 6360]),
          dataRow(["앱 실행 시간", "콜드 스타트 3초 이내"], [3000, 6360]),
          dataRow(["화면 전환 속도", "탭 전환 0.5초 이내"], [3000, 6360], true),
          dataRow(["잔액 갱신 주기", "실시간 or 최대 30초 지연"], [3000, 6360]),
          dataRow(["API 응답 시간", "P95 기준 1,000ms 이내"], [3000, 6360], true),
          dataRow(["동시 접속 처리", "최대 10만 동시 사용자 지원"], [3000, 6360]),
        ]
      }),
      spacer(),

      h2("4.2 보안"),
      bullet("금융 데이터 암호화: TLS 1.3 이상 적용"),
      bullet("생체 인증(Face ID / 지문) 또는 PIN 인증 필수"),
      bullet("세션 타임아웃: 비활성 10분 후 자동 로그아웃"),
      bullet("개인정보처리방침 및 금융정보 이용 동의 UI 제공"),
      bullet("이상 거래 탐지 시스템 연동"),
      spacer(),

      h2("4.3 접근성"),
      bullet("최소 텍스트 크기: 14sp 이상"),
      bullet("터치 타겟 최소 크기: 44×44 dp (WCAG 2.1 AA 기준)"),
      bullet("색상 대비율: 4.5:1 이상"),
      bullet("VoiceOver / TalkBack 스크린리더 지원"),
      spacer(),

      h2("4.4 지원 환경"),
      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [2500, 6860],
        rows: [
          labeledRow("iOS", "iOS 15 이상"),
          labeledRow("Android", "Android 8.0 (API 26) 이상", true),
          labeledRow("화면 해상도", "360dp ~ 430dp 너비 기준 최적화"),
          labeledRow("다크 모드", "v1.0 미지원, v2.0 로드맵 포함", true),
          labeledRow("언어", "한국어 (v1.0), 영어 (v2.0 예정)"),
        ]
      }),

      new Paragraph({ children: [new PageBreak()] }),

      // ─── 5. 화면 설계 요약 ────────────────────────────────
      h1("5. 화면 설계 요약"),

      h2("5.1 디자인 시스템"),
      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [2500, 6860],
        rows: [
          labeledRow("Primary Color", "#5CB85C (라임 그린)"),
          labeledRow("Background", "#FFFFFF / #F5F5F5", true),
          labeledRow("Text Primary", "#1A1A1A"),
          labeledRow("Text Secondary", "#666666", true),
          labeledRow("Positive (수익)", "#5CB85C (그린)"),
          labeledRow("Negative (손실)", "#E53935 (레드)", true),
          labeledRow("Typography", "Malgun Gothic / Noto Sans KR"),
          labeledRow("Grid", "8dp 베이스 그리드", true),
          labeledRow("Corner Radius", "카드 8dp, 버튼 24dp (Pill)"),
        ]
      }),
      spacer(),

      h2("5.2 핵심 컴포넌트"),
      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [2500, 3060, 3800],
        rows: [
          headerRow(["컴포넌트", "사용 화면", "설명"], [2500, 3060, 3800]),
          dataRow(["Balance Card", "홈, 수익률", "투자 금액/수익률 대형 카드"], [2500, 3060, 3800]),
          dataRow(["CTA Button", "홈, 수익률", "Primary 그린 풀-너비 버튼"], [2500, 3060, 3800], true),
          dataRow(["Bar Chart", "수익률", "기간별 수익 바 차트"], [2500, 3060, 3800]),
          dataRow(["Feed Card", "친구 탭", "친구 활동 카드 리스트"], [2500, 3060, 3800], true),
          dataRow(["Progress Bar", "홈 챌린지", "달성률 그린 프로그레스 바"], [2500, 3060, 3800]),
          dataRow(["Avatar + Badge", "친구 탭", "프로필 이미지 + 상태 뱃지"], [2500, 3060, 3800], true),
          dataRow(["Bottom Nav", "전체", "아이콘 + 라벨 4탭 하단 바"], [2500, 3060, 3800]),
        ]
      }),

      new Paragraph({ children: [new PageBreak()] }),

      // ─── 6. 릴리즈 계획 ──────────────────────────────────
      h1("6. 릴리즈 계획"),

      h2("6.1 MVP 범위 (v1.0)"),
      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [1400, 2960, 5000],
        rows: [
          headerRow(["우선순위", "기능", "포함 여부"], [1400, 2960, 5000]),
          dataRow(["P0", "홈 대시보드 (잔액, CTA)", "✅ v1.0 포함"], [1400, 2960, 5000]),
          dataRow(["P0", "수익률 차트 & 포트폴리오", "✅ v1.0 포함"], [1400, 2960, 5000], true),
          dataRow(["P0", "친구 목록 & 소셜 피드", "✅ v1.0 포함"], [1400, 2960, 5000]),
          dataRow(["P0", "기본 설정 & 프로필", "✅ v1.0 포함"], [1400, 2960, 5000], true),
          dataRow(["P1", "무료 충전 챌린지", "✅ v1.0 포함"], [1400, 2960, 5000]),
          dataRow(["P1", "1:1 채팅", "✅ v1.0 포함"], [1400, 2960, 5000], true),
          dataRow(["P2", "그룹 챌린지 생성", "⬜ v1.1 예정"], [1400, 2960, 5000]),
          dataRow(["P2", "다크 모드", "⬜ v2.0 예정"], [1400, 2960, 5000], true),
          dataRow(["P3", "영어 지원", "⬜ v2.0 예정"], [1400, 2960, 5000]),
        ]
      }),
      spacer(),

      h2("6.2 마일스톤"),
      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [2000, 3000, 4360],
        rows: [
          headerRow(["단계", "일정", "주요 내용"], [2000, 3000, 4360]),
          dataRow(["디자인 확정", "2026-05-31", "Figma 최종 시안 승인"], [2000, 3000, 4360]),
          dataRow(["개발 착수", "2026-06-01", "스프린트 1 시작 (백엔드 API + 앱 기본 구조)"], [2000, 3000, 4360], true),
          dataRow(["알파 테스트", "2026-07-31", "내부 QA, 기능 완성도 검증"], [2000, 3000, 4360]),
          dataRow(["베타 테스트", "2026-08-31", "클로즈드 베타, 실사용자 피드백 수집"], [2000, 3000, 4360], true),
          dataRow(["v1.0 출시", "2026-09-30", "App Store / Google Play 공개 출시"], [2000, 3000, 4360]),
        ]
      }),

      new Paragraph({ children: [new PageBreak()] }),

      // ─── 7. 오픈 이슈 & 의존성 ───────────────────────────
      h1("7. 오픈 이슈 & 의존성"),

      h2("7.1 결정 필요 항목"),
      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [600, 4000, 2500, 2260],
        rows: [
          headerRow(["#", "이슈", "담당자", "기한"], [600, 4000, 2500, 2260]),
          dataRow(["1", "증권사 API 연동 파트너 선정 (증권/은행)", "BD팀", "2026-05-20"], [600, 4000, 2500, 2260]),
          dataRow(["2", "본인인증 방식 확정 (통신사 / 카카오 / PASS)", "개발팀", "2026-05-25"], [600, 4000, 2500, 2260], true),
          dataRow(["3", "챌린지 리워드 포인트 전환 정책", "기획팀", "2026-06-01"], [600, 4000, 2500, 2260]),
          dataRow(["4", "개인정보 처리방침 법률 검토", "법무팀", "2026-05-31"], [600, 4000, 2500, 2260], true),
          dataRow(["5", "실시간 시세 데이터 공급사 계약", "BD팀", "2026-06-01"], [600, 4000, 2500, 2260]),
        ]
      }),
      spacer(),

      h2("7.2 외부 의존성"),
      bullet("증권사/은행 오픈 API 연동 (Open Banking API)"),
      bullet("실시간 주식/코인 시세 데이터 공급사 (예: KIS, 한국투자증권 API)"),
      bullet("푸시 알림: Firebase Cloud Messaging (FCM) / APNs"),
      bullet("소셜 로그인: 카카오 로그인 / Apple 로그인"),
      bullet("채팅 인프라: Socket.IO 또는 서드파티 (예: Sendbird)"),
      spacer(),

      h2("7.3 리스크"),
      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [3000, 2500, 3860],
        rows: [
          headerRow(["리스크", "영향도", "대응 방안"], [3000, 2500, 3860]),
          dataRow(["증권사 API 연동 지연", "높음", "대체 파트너 사전 탐색"], [3000, 2500, 3860]),
          dataRow(["금융보안원 심사 지연", "높음", "심사 제출 일정 2주 앞당김"], [3000, 2500, 3860], true),
          dataRow(["실시간 시세 비용 증가", "중간", "캐싱 전략으로 API 호출 최소화"], [3000, 2500, 3860]),
          dataRow(["초기 사용자 소셜 기능 활성화 저조", "중간", "지인 초대 인센티브 강화"], [3000, 2500, 3860], true),
        ]
      }),

      new Paragraph({ children: [new PageBreak()] }),

      // ─── 8. 변경 이력 ─────────────────────────────────────
      h1("8. 변경 이력"),
      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [1400, 1600, 2200, 4160],
        rows: [
          headerRow(["버전", "날짜", "작성자", "변경 내용"], [1400, 1600, 2200, 4160]),
          dataRow(["v1.0", "2026-05-04", "기획팀", "최초 문서 작성 (Figma 디자인 기반)"], [1400, 1600, 2200, 4160]),
        ]
      }),
      spacer(),

      body("※ 본 문서는 Figma 디자인(UI-UX 앱정리) 파일을 기반으로 작성된 초안입니다.", GRAY),
      body("※ 개발 진행 및 이해관계자 리뷰에 따라 내용이 변경될 수 있습니다.", GRAY),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("D:\\uxui\\MOTIMO_PRD_v1.0.docx", buffer);
  console.log("PRD 문서 생성 완료: D:\\uxui\\MOTIMO_PRD_v1.0.docx");
});
