const fashionData = [
    {
        title: "스트릿 (Street)",
        tag: "Youth & Freedom",
        image: "https://i.pinimg.com/736x/9b/bf/8f/9bbf8ffe8cad2a452e6121c97422bbd0.jpg",
        desc: "길거리 문화(스케이트보드, 힙합 등)에서 유래한 자유롭고 힙한 스타일입니다. 개성 있는 그래픽과 오버사이즈 실루엣이 돋보입니다.",
        domestic: [
            { name: "디스이즈네버댓", desc: "서울 스트리트 씬의 글로벌 선구자로, 감각적인 로고 플레이와 빈티지한 무드를 결합합니다.", logo: "TN", url: "https://thisisneverthat.com" },
            { name: "노매뉴얼", desc: "정해진 매뉴얼 없이 매 시즌 새로운 실험을 이어가는 쿨한 감성의 서울 브랜드입니다.", logo: "NM", url: "https://nomanual-shop.com/" },
            { name: "마뗑킴", desc: "시크한 디자인과 트렌디한 감각으로 MZ세대에게 압도적인 지지를 받는 브랜드입니다.", logo: "MK", url: "https://matinkim.com/" }
        ],
        global: [
            { name: "스투시", desc: "서프와 스케이트 씬에서 탄생하여 스트리트 패션의 근본이 된 아이코닉 브랜드입니다.", logo: "ST", url: "https://www.stussy.co.kr" },
            { name: "팔라스", desc: "런던 스케이트보드 문화의 정수로, 특유의 삼각형 로고와 위트 있는 디자인이 강점입니다.", logo: "PL", url: "https://www.palaceskateboards.com" },
            { name: "슈프림", desc: "스트리트 패션 그 자체라 불리며, 강력한 하이프 문화를 형성한 뉴욕의 상징입니다.", logo: "SP", url: "https://shop.supreme.com/pages/shop" },
            { name: "베이프", desc: "원숭이 그래픽과 카무플라주 패턴으로 일본 하라주쿠 스타일을 정립한 브랜드입니다.", logo: "BP", url: "https://kr.bape.com/" },
            { name: "크롬하츠", desc: "럭셔리 스트리트의 끝판왕으로, 정교한 실버 액세서리와 독보적인 락 시크 감성을 보여줍니다.", logo: "CH", url: "https://www.chromehearts.com" }
        ]
    },
    {
        title: "포멀 (Formal)",
        tag: "Timeless & Sophisticated",
        image: "https://i.pinimg.com/1200x/5a/3d/58/5a3d5836702ef874f910a27b929f1848.jpg",
        desc: "격식을 차린 정장 스타일입니다. 정교한 테일러링과 고급스러운 소재를 통해 신뢰감과 우아한 실루엣을 완성합니다.",
        domestic: [
            { name: "타임옴므", desc: "국내 최고 수준의 소재와 정교한 테일러링으로 유명한 프리미엄 포멀/컨템포러리 브랜드입니다.", logo: "TO", url: "https://www.thehandsome.com/en/" },
            { name: "블랑드누아", desc: "무채색 기반의 미니멀하고 정교한 테일러링을 선보이는 컨템포러리 디자이너 브랜드입니다.", logo: "BN", url: "https://blancdenoirs.com" },
            { name: "로웨", desc: "담백하면서도 힘 있는 선을 활용하여 일상에서 입기 좋은 세련된 포멀 웨어를 제안합니다.", logo: "LW", url: "https://roweboutique.co.kr/" }
        ],
        global: [
            { name: "톰포드", desc: "섹시하고 관능적인 남성미를 극대화한 완벽한 핏의 럭셔리 수트를 선보입니다.", logo: "TF", url: "https://www.tomford.com" },
            { name: "휴고 보스", desc: "독일의 정교한 장인정신이 깃든 현대적인 비즈니스 포멀의 대명사입니다.", logo: "HB", url: "https://www.hugoboss.com" },
            { name: "랄프 로렌 퍼플 라벨", desc: "랄프 로렌의 최상위 라인으로, 최고의 소재와 전통적인 장인 기술이 결합된 우아함의 정점입니다.", logo: "RL", url: "https://www.ralphlauren.co.kr" },
            { name: "조르지오 아르마니", desc: "부드럽고 자연스러운 실루엣을 통해 이탈리아의 세련된 멋을 완성한 브랜드입니다.", logo: "GA", url: "https://www.armani.com" },
            { name: "제냐", desc: "원단부터 완제품까지 완벽한 품질 관리를 고수하는 하이엔드 테일러링의 정수입니다.", logo: "ZE", url: "https://www.zegna.com" }
        ]
    },
    {
        title: "캐주얼 (Casual)",
        tag: "Relaxed Daily Life",
        image: "https://i.pinimg.com/736x/4a/e6/55/4ae65543029f8f3f9cbc0b0db11b5311.jpg",
        desc: "일상에서 가장 편안하고 가볍게 입을 수 있는 스타일입니다. 누구나 쉽게 시도할 수 있으며 범용성이 넓은 아이템들로 구성됩니다.",
        domestic: [
            { name: "미스치프", desc: "90년대 힙합과 캐주얼 문화를 바탕으로 여성 스트리트/캐주얼 씬의 트렌드를 이끄는 브랜드입니다.", logo: "MS", url: "https://mischief.co.kr" },
            { name: "커버낫", desc: "빈티지 웨어의 헤리티지를 현대적으로 풀어내어 한국형 캐주얼의 기준을 만든 브랜드입니다.", logo: "CV", url: "https://covernat.net" },
            { name: "이미스", desc: "심플한 로고와 다채로운 컬러로 일상의 즐거움을 더하는 액세서리와 캐주얼 웨어를 선보입니다.", logo: "EM", url: "https://emis.kr" }
        ],
        global: [
            { name: "리바이스", desc: "데님의 역사를 시작한 브랜드로, 전 세계 캐주얼 팬츠의 표준을 제시합니다.", logo: "LV", url: "https://www.levi.co.kr" },
            { name: "라코스테", desc: "테니스 헤리티지에서 기원한 스포티하고 깔끔한 프렌치 캐주얼의 정석입니다.", logo: "LC", url: "https://www.lacoste.com" },
            { name: "타미힐피거", desc: "미국의 고유한 레드, 화이트, 블루 컬러 조합이 돋보이는 프레피 무드의 캐주얼 브랜드입니다.", logo: "TH", url: "https://www.tommy.com" },
            { name: "유니클로", desc: "라이프웨어(LifeWear) 철학 아래 고품질의 베이직 아이템을 전 세계에 제안합니다.", logo: "UQ", url: "https://www.uniqlo.com" }
        ]
    },
    {
        title: "고프코어 (Gorpcore)",
        tag: "Function & Style",
        image: "https://i.pinimg.com/736x/2e/89/0a/2e890a360fbd7de73eaf8502fc29c40f.jpg",
        desc: "등산복이나 캠핑복 같은 아웃도어 의류를 일상복과 믹스매치한 스타일입니다. 고성능 기능성과 세련된 미학이 공존합니다.",
        domestic: [
            { name: "산산기어", desc: "독창적인 절개 라인과 테크니컬한 디테일로 국내 고프코어 열풍의 중심에 있는 브랜드입니다.", logo: "SG", url: "https://sansangear.com" },
            { name: "언더마이카", desc: "강렬한 실루엣과 차별화된 디자인으로 출시마다 화제를 모으는 실험적 고프코어 레이블입니다.", logo: "UM", url: "https://undermycar.co.kr" }
        ],
        global: [
            { name: "아크테릭스", desc: "극한의 상황을 견디는 완벽한 기술력과 세련된 디자인으로 고프코어의 정점에 서 있습니다.", logo: "AX", url: "https://arcteryx.co.kr" },
            { name: "살로몬", desc: "기능성 트레킹 슈즈를 패션 아이템으로 완벽하게 안착시킨 아웃도어 명가입니다.", logo: "SL", url: "https://www.salomon.co.kr" },
            { name: "파타고니아", desc: "환경 보호 철학을 바탕으로 지속 가능한 아웃도어 패션을 선도합니다.", logo: "PT", url: "https://www.patagonia.co.kr" },
            { name: "노스페이스", desc: "오랜 시간 사랑받아온 기술력과 대중적인 디자인으로 고프코어 룩의 든든한 기반이 됩니다.", logo: "NF", url: "https://www.thenorthfacekorea.co.kr" },
            { name: "스노우 피크", desc: "캠핑 문화의 감성을 미니멀하고 세련된 의류 디자인으로 녹여낸 브랜드입니다.", logo: "SP", url: "https://www.snowpeak.co.kr" }
        ]
    },
    {
        title: "빈티지 (Vintage)",
        tag: "Classic Heritage",
        image: "https://i.pinimg.com/1200x/1b/69/56/1b6956ccffefe3f03adafb2db79c836b.jpg",
        desc: "과거 시대의 아이템을 그대로 활용하거나, 그 시절의 감성을 현대적으로 재해석하여 입는 고풍스러운 스타일입니다.",
        domestic: [
            { name: "이스트로그", desc: "국내 최고의 빈티지 밀리터리, 아웃도어 복각 및 아카이브 웨어 브랜드입니다.", logo: "EL", url: "https://fr8ight.co.kr/" },
            { name: "유스", desc: "특유의 빈티지 워싱, 해체주의적 감성, 클래식 빈티지 실루엣을 모던하게 풀어내는 디자이너 브랜드입니다.", logo: "YT", url: "https://youth-lab.kr" },
            { name: "벨리에", desc: "빈티지 의류의 특징을 모던한 라인업에 반영하는 컨템포러리/빈티지 웨어 브랜드입니다.", logo: "BL", url: "https://belier.co.kr" }
        ],
        global: [
            { name: "더 리얼 맥코이", desc: "철저한 고증을 통해 군복과 워크웨어를 당시보다 더 완벽하게 만들어내는 복각의 명가입니다.", logo: "RM", url: "https://realmccoys.co.jp" },
            { name: "캐피탈", desc: "일본의 데님 성지 코지마에서 탄생하여, 독보적인 가공 방식과 보로 스타일을 완성했습니다.", logo: "KP", url: "https://kapital.jp" },
            { name: "휴먼메이드", desc: "니고(NIGO)가 이끄는 브랜드로 빈티지 아메리카나를 위트 있게 재해석합니다.", logo: "HM", url: "https://humanmade.jp" },
            { name: "챔피온", desc: "스포츠웨어의 고전으로, 특유의 헤비웨이트 코튼 소재가 빈티지 매니아들에게 사랑받습니다.", logo: "CP", url: "https://www.championkorea.com" }
        ]
    },
    {
        title: "애슬레저 (Athleisure)",
        tag: "Sporty & Healthy",
        image: "https://i.pinimg.com/736x/50/3e/ad/503eadbb33cc475386b4072a45fd2a0c.jpg",
        desc: "운동(Athletic)과 여가(Leisure)의 합성어로, 스포티한 운동복을 일상에서도 세련되게 소화하는 스타일입니다.",
        domestic: [
            { name: "젝시믹스", desc: "트렌디한 핏과 강력한 기능성으로 한국 애슬레저 시장을 선도하는 대표 브랜드입니다.", logo: "XM", url: "https://www.xexymix.com" },
            { name: "안다르", desc: "편안한 일상을 위한 고품질 애슬레저 웨어로 K-요가복의 대중화를 이끈 브랜드입니다.", logo: "AD", url: "https://www.andar.co.kr" }
        ],
        global: [
            { name: "룰루레몬", desc: "애슬레저의 에르메스라 불리며 요가복의 혁신과 라이프스타일 문화를 창조했습니다.", logo: "LL", url: "https://www.lululemon.co.kr" },
            { name: "나이키", desc: "압도적인 기술력과 상징적인 디자인으로 전 세계 모든 스포츠웨어의 기준이 됩니다.", logo: "NK", url: "https://www.nike.com" },
            { name: "아디다스", desc: "특유의 3선 스트라이프를 통해 스포츠와 패션의 경계를 완벽히 허문 글로벌 브랜드입니다.", logo: "AD", url: "https://www.adidas.co.kr" },
            { name: "언더아머", desc: "강력한 기능성 압축 셔츠로 시작되어 퍼포먼스에 집중하는 모든 이들을 대변합니다.", logo: "UA", url: "https://www.underarmour.co.kr/ko-kr/" },
            { name: "퓨마", desc: "유연하고 역동적인 스포츠웨어에 패션 디자이너들과의 협업으로 감각을 더했습니다.", logo: "PM", url: "https://kr.puma.com" }
        ]
    },
    {
        title: "아메카지 (Amekaji)",
        tag: "American Casual Re-interpreted",
        image: "https://i.pinimg.com/736x/17/00/f2/1700f26546c00dc215ecf2f1d4084137.jpg",
        desc: "'아메리칸 캐주얼'을 일본식으로 재해석한 스타일입니다. 미국의 워크웨어나 밀리터리 감성을 여유로운 핏으로 소화하는 것이 특징입니다.",
        domestic: [
            { name: "프리즘웍스", desc: "기본에 충실한 디테일과 워크웨어 무드를 합리적으로 제안하는 아메카지 입문 정석 브랜드입니다.", logo: "PW", url: "https://frizm.co.kr" },
            { name: "에스피오나지", desc: "밀리터리와 빈티지 아카이브에 대한 깊은 연구를 바탕으로 탄탄한 품질을 보여주는 브랜드입니다.", logo: "ES", url: "https://espionage.co.kr" },
            { name: "아웃스탠딩", desc: "아메리칸 빈티지의 매력을 현대적으로 다듬어 누구나 입기 좋은 스타일으로 제안합니다.", logo: "OS", url: "https://outstanding-co.kr/" }
        ],
        global: [
            { name: "엔지니어드 가먼츠", desc: "디테일에 대한 집착과 실용적인 구조로 뉴욕 아메카지 씬의 정점으로 불립니다.", logo: "EG", url: "https://www.engineeredgarments.com" },
            { name: "비즈빔", desc: "장인정신과 최첨단 기술을 결합하여 세상에 없던 하이엔드 아메카지 가치를 창조합니다.", logo: "VV", url: "https://www.visvim.tv" },
            { name: "오슬로우", desc: "'천천히(Slow)'를 지향하며 고전적인 아이템을 일본 특유의 정교한 퀄리티로 완성합니다.", logo: "OR", url: "http://orslow.jp" },
            { name: "니들스", desc: "전통적인 스타일을 붕괴시키고 트랙수트와 빈티지 패턴의 결합 등 과감한 시도를 이어갑니다.", logo: "ND", url: "https://www.needles.jp" }
        ]
    },
    {
        title: "미니멀 (Minimal)",
        tag: "Simple & Modern",
        image: "https://i.pinimg.com/1200x/d1/c8/8e/d1c88e8b3ef93f9ddd5890905dd8d4d1.jpg",
        desc: "장식을 덜어내고 본질에 집중하는 미학입니다. 정제된 컬러와 소재감, 실루엣의 완성도가 중요합니다.",
        domestic: [
            { name: "인사일런스", desc: "군더더기 없는 디자인과 우수한 품질로 미니멀리즘의 정석을 보여주는 브랜드입니다.", logo: "IS", url: "https://insilence.co.kr" },
            { name: "쿠어", desc: "독보적인 색감과 미니멀한 실루엣으로 세련된 데일리 웨어를 제안합니다.", logo: "CR", url: "https://coor.kr" }
        ],
        global: [
            { name: "코스", desc: "현대적이고 기능적인 디자인으로 런던 베이스의 모던 미니멀을 대중화했습니다.", logo: "CO", url: "https://www.cos.com" },
            { name: "질 샌더", desc: "절제미의 극치라 불리며, 명료한 커팅과 럭셔리한 소재 사용이 특징입니다.", logo: "JS", url: "https://www.jilsander.com" }
        ]
    },
    {
        title: "시티보이 (City Boy)",
        tag: "Urban Leisure",
        image: "https://i.pinimg.com/1200x/10/8e/e4/108ee42623123bb2a93d40d55bd3641e.jpg",
        desc: "도시적인 라이프스타일을 향유하는 소년의 이미지입니다. 오버사이즈와 단정한 레이어드가 매력입니다.",
        domestic: [
            { name: "유니폼브릿지", desc: "빈티지, 아웃도어 무드를 결합하여 누구나 입기 좋은 시티웨어의 정석을 제안합니다.", logo: "UB", url: "https://uniformbridge.com" }
        ],
        global: [
            { name: "나나미카", desc: "전통적인 디자인에 고어텍스 등 첨단 소재를 접목하여 가장 세련된 시티룩을 만듭니다.", logo: "NA", url: "https://www.nanamica.com" },
            { name: "빔즈", desc: "일본의 대표 편집숍이자 브랜드로 시티보이 룩의 원류와도 같은 역할을 합니다.", logo: "BM", url: "https://www.beams.co.jp" }
        ]
    },
    {
        title: "프레피 (Preppy)",
        tag: "Ivy League Heritage",
        image: "https://i.pinimg.com/736x/f7/eb/aa/f7ebaa15b26753a0ad305509d0d7bb4e.jpg",
        desc: "미국 아이비리그 학생들의 교복 스타일에서 유래했습니다. 지적이고 단정하며 격조 있는 캐주얼을 지향합니다.",
        domestic: [
            { name: "해지스", desc: "브리티시 감성을 한국적인 실용주의로 풀어내어 프레피 무드를 대중화했습니다.", logo: "HZ", url: "https://www.lfmall.co.kr" }
        ],
        global: [
            { name: "브룩스 브라더스", desc: "미국에서 가장 오래된 패션 브랜드로 프레피 룩의 근본 아이템들을 창조해왔습니다.", logo: "BB", url: "https://www.brooksbrothers.co.kr" },
            { name: "갠트", desc: "아이비리그 셔츠 제조에서 시작되어 대학생들의 자유로운 지성을 대변하는 브랜드입니다.", logo: "GT", url: "https://gant.com" }
        ]
    },
    {
        title: "테크웨어 (Techwear)",
        tag: "Future Tech",
        image: "https://i.pinimg.com/736x/f1/5c/61/f15c616ff0400f1288e5480629ceffe9.jpg",
        desc: "첨단 소재와 미래지향적 디자인의 결합입니다. 사이버펑크적인 무드와 압도적인 기능성이 조화를 이룹니다.",
        domestic: [
            { name: "포스트 아카이브 팩션", desc: "미래지향적인 절개와 유기적인 패턴 기법을 중심으로 세계적인 주목을 받는 한국의 하이엔드 테크웨어/아방가르드 브랜드입니다.", logo: "PA", url: "https://postarchivefaction.com/ko/collections/all" },
            { name: "엑슬림", desc: "독창적인 소재감과 다채로운 원단 레이어드로 서울형 하이테크 스트리트 씬을 대표합니다.", logo: "XL", url: "https://xlim.link/" }
        ],
        global: [
            { name: "아크로님", desc: "테크웨어의 창시자 에롤슨 휴의 브랜드로 복잡한 기능을 우아하게 숨겨놓는 것이 특징입니다.", logo: "AC", url: "https://acrnm.com" },
            { name: "스톤 아일랜드", desc: "섬유의 물리적 변화와 염색 공학을 통해 테크니컬 럭셔리의 정점을 보여줍니다.", logo: "SI", url: "https://www.stoneisland.com" }
        ]
    },
    {
        title: "히피 (Hippie)",
        tag: "Bohemian Spirit",
        image: "https://i.pinimg.com/736x/c1/a3/64/c1a3642c19dd8ab6791f018763aad9af.jpg",
        desc: "자유와 평화를 지향하는 정신이 깃든 스타일입니다. 에스닉한 패턴과 자연스러운 실루엣이 평온함을 줍니다.",
        domestic: [
            { name: "서저리", desc: "패치워크, 해체주의, 리워크 데님을 활용해 현대적인 스트리트 히피 무드를 대표하는 국내 브랜드입니다.", logo: "BS", url: "https://www.sur8ery.com/shop" }
        ],
        global: [
            { name: "프리 피플", desc: "히피/보헤미안 패션의 세계적인 대표 브랜드로, 히피 감성의 바이블처럼 취급됩니다.", logo: "BD", url: "https://www.freepeople.com/" },
            { name: "에트로", desc: "페이슬리(Paisley) 패턴의 대명사이자, 하이엔드 럭셔리 히피 감성을 연출할 때 빠지지 않는 하우스 브랜드입니다.", logo: "IM", url: "https://www.etro.com/kr-ko/" },
            { name: "이자벨 마랑", desc: "프렌치 시크와 빈티지 보헤미안을 결합한 프렌치 히피 스타일로 유명합니다.", logo: "IM", url: "https://intl.isabelmarant.com/ko-kr/collections/coats-woman" },
            { name: "카피탈", desc: "히피, 히피 그런지, 보헤미안, 아메카지를 결합한 세계 최고의 보로(Boro) / 패치워크 브랜드입니다.", logo: "KP", url: "https://www.kapital.jp/" }
        ]
    },
    {
        title: "펑크 (Punk)",
        tag: "Raw Energy",
        image: "https://i.pinimg.com/1200x/ec/46/25/ec4625e6f972496e94c7462e1e9d076a.jpg",
        desc: "주류 문화에 저항하는 강력한 에너지를 표현합니다. 찢어진 디테일과 가죽, 메탈 장식 등이 거친 매력을 발산합니다.",
        domestic: [
            { name: "99%IS-", desc: "디자이너 바조우가 이끄는 전 세계적인 펑크 레이블로 저항 정신을 세계에 알렸습니다.", logo: "99", url: "https://99percentis.com" }
        ],
        global: [
            { name: "비비안 웨스트우드", desc: "영국 펑크 문화를 패션의 영역으로 끌어올린 불세출의 디자이너 브랜드입니다.", logo: "VW", url: "https://www.viviennewestwood.com" },
            { name: "닥터마틴", desc: "노동자 계급에서 시작되어 펑크 밴드들의 상징이 된 아이코닉 부츠 브랜드입니다.", logo: "DM", url: "https://www.drmartens.co.kr" }
        ]
    }
];

const mainFeed = document.getElementById('main-feed');
const modal = document.getElementById('modal-overlay');

function openModal(brand) {
    document.getElementById('modal-logo').innerText = brand.logo;
    document.getElementById('modal-name').innerText = brand.name;
    document.getElementById('modal-desc').innerText = brand.desc;
    document.getElementById('modal-link').href = brand.url;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function createBrandCard(brand) {
    const card = document.createElement('div');
    card.className = 'brand-card';
    card.innerHTML = `
        <div class="brand-logo-box">
            <span style="font-weight:900; font-size:1.6rem; letter-spacing:-1px;">${brand.logo}</span>
        </div>
        <div class="brand-name-label">${brand.name}</div>
    `;
    card.onclick = () => openModal(brand);
    return card;
}

function render() {
    fashionData.forEach((item, index) => {
        const section = document.createElement('section');
        section.className = 'style-section';
        section.id = `style-section-${index}`;

        section.innerHTML = `
            <div class="style-visual">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
            </div>
            <div class="style-content">
                <span class="style-tag">${item.tag}</span>
                <h2 class="style-name">${item.title}</h2>
                <p class="style-desc">${item.desc}</p>
                
                <div class="brand-category">
                    <div class="brand-category-title">KOREA BASED</div>
                    <div id="domestic-${index}" class="brand-list"></div>
                </div>
                
                <div class="brand-category">
                    <div class="brand-category-title">GLOBAL HERITAGE</div>
                    <div id="global-${index}" class="brand-list"></div>
                </div>
            </div>
        `;

        mainFeed.appendChild(section);
        const domList = document.getElementById(`domestic-${index}`);
        const globList = document.getElementById(`global-${index}`);

        if (item.domestic && item.domestic.length > 0) {
            item.domestic.forEach(b => domList.appendChild(createBrandCard(b)));
        } else {
            domList.parentElement.style.display = 'none';
        }

        if (item.global && item.global.length > 0) {
            item.global.forEach(b => globList.appendChild(createBrandCard(b)));
        } else {
            globList.parentElement.style.display = 'none';
        }
    });
}

document.getElementById('modal-close').onclick = closeModal;
document.getElementById('modal-close-btn').onclick = closeModal;
modal.onclick = (e) => { if (e.target === modal) closeModal(); };

window.onload = render;
