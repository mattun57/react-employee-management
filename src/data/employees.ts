export interface Employee {
    id: number;
    name: string;
    nameKana: string;
    department: string;
    position: string;
    team: string;
    skills: string[];
    experience: number;
    memo: string;
  }
  
  export const employees: Employee[] = [
    { id: 1001, name: "佐藤 太郎", nameKana: "さとう たろう", department: "メディア事業部", position: "マネージャー", team: "なし", skills: ["C#", "React", "TypeScript", "JavaScript", "AWS"], experience: 11, memo: "" },
    { id: 1002, name: "鈴木 花子", nameKana: "すずき はなこ", department: "SIer事業部", position: "マネージャー", team: "なし", skills: ["C#", ".NET", "Java", "Spring", "Azure"], experience: 12, memo: "" },
    { id: 1003, name: "田中 一郎", nameKana: "たなか いちろう", department: "メディア事業部", position: "サブマネージャー", team: "田中グループ", skills: ["PHP", "React", "TypeScript"], experience: 7, memo: "次期マネージャー候補" },
    { id: 1004, name: "高橋 健", nameKana: "たかはし けん", department: "メディア事業部", position: "サブマネージャー", team: "高橋グループ", skills: ["React", "TypeScript", "JavaScript", "AWS"], experience: 10, memo: "" },
    { id: 1005, name: "伊藤 美咲", nameKana: "いとう みさき", department: "メディア事業部", position: "サブマネージャー", team: "伊藤グループ", skills: ["TypeScript", "JavaScript", "AWS"], experience: 6, memo: "" },
    { id: 1006, name: "渡辺 剛", nameKana: "わたなべ つよし", department: "SIer事業部", position: "サブマネージャー", team: "渡辺グループ", skills: ["C#", "Python", "Django"], experience: 5, memo: "" },
    { id: 1007, name: "山本 彩", nameKana: "やまもと あや", department: "SIer事業部", position: "サブマネージャー", team: "山本グループ", skills: ["C#", ".NET", "Java"], experience: 9, memo: "" },
    { id: 1008, name: "中村 翔", nameKana: "なかむら しょう", department: "SIer事業部", position: "サブマネージャー", team: "中村グループ", skills: ["C#", ".NET", "Java"], experience: 8, memo: "" },
    { id: 1009, name: "小林 優", nameKana: "こばやし ゆう", department: "メディア事業部", position: "メンバー", team: "田中グループ", skills: ["React", "TypeScript", "JavaScript"], experience: 3, memo: "" },
    { id: 1010, name: "加藤 真奈美", nameKana: "かとう まなみ", department: "メディア事業部", position: "メンバー", team: "田中グループ", skills: ["React", "TypeScript", "JavaScript"], experience: 2, memo: "" },
    { id: 1011, name: "吉田 修", nameKana: "よしだ おさむ", department: "メディア事業部", position: "メンバー", team: "高橋グループ", skills: ["PHP", "Laravel"], experience: 6, memo: "" },
    { id: 1012, name: "山田 花", nameKana: "やまだ はな", department: "メディア事業部", position: "メンバー", team: "高橋グループ", skills: ["Illustrator", "Photoshop"], experience: 2, memo: "" },
    { id: 1013, name: "松本 亮", nameKana: "まつもと りょう", department: "メディア事業部", position: "メンバー", team: "伊藤グループ", skills: ["React", "JavaScript"], experience: 1, memo: "" },
    { id: 1014, name: "井上 美紀", nameKana: "いのうえ みき", department: "メディア事業部", position: "メンバー", team: "伊藤グループ", skills: ["Vue.js", "Nuxt"], experience: 1, memo: "" },
    { id: 1015, name: "木村 健太", nameKana: "きむら けんた", department: "SIer事業部", position: "メンバー", team: "渡辺グループ", skills: ["Rust"], experience: 3, memo: "" },
    { id: 1016, name: "林 直樹", nameKana: "はやし なおき", department: "SIer事業部", position: "メンバー", team: "渡辺グループ", skills: ["Python"], experience: 6, memo: "" },
    { id: 1017, name: "清水 結衣", nameKana: "しみず ゆい", department: "SIer事業部", position: "メンバー", team: "山本グループ", skills: ["Go"], experience: 4, memo: "" },
    { id: 1018, name: "森田 悠", nameKana: "もりた ゆう", department: "SIer事業部", position: "メンバー", team: "山本グループ", skills: ["Python", "Flask"], experience: 2, memo: "" },
    { id: 1019, name: "原田 翔子", nameKana: "はらだ しょうこ", department: "SIer事業部", position: "メンバー", team: "中村グループ", skills: ["Java"], experience: 5, memo: "" },
    { id: 1020, name: "岡田 大輔", nameKana: "おかだ だいすけ", department: "SIer事業部", position: "メンバー", team: "中村グループ", skills: ["C#"], experience: 7, memo: "" },
  ];
  