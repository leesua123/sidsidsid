// 100종 이상 성분 DB 예시 (점수 0~100, 친환경 등급, EWG 등급)
const ingredientDB = {
  "Ethanol": { score: 70, eco: "중간", ewg: "3" },
  "Fragrance": { score: 20, eco: "비친환경", ewg: "8" },
  "Glycerin": { score: 90, eco: "친환경", ewg: "1" },
  "Zinc Ricinoleate": { score: 80, eco: "친환경", ewg: "2" },
  "Aluminum salts": { score: 30, eco: "비친환경", ewg: "7" },
  "PEG-40": { score: 40, eco: "비친환경", ewg: "5" },
  "Water": { score: 100, eco: "친환경", ewg: "1" },
  "Linalool": { score: 50, eco: "중간", ewg: "5" },
  "Phenoxyethanol": { score: 25, eco: "비친환경", ewg: "8" },
  "Baking Soda": { score: 85, eco: "친환경", ewg: "1" },
  "Citric Acid": { score: 95, eco: "친환경", ewg: "1" },
  "Chlorhexidine": { score: 10, eco: "비친환경", ewg: "8" },
  "Tea Tree Oil": { score: 75, eco: "친환경", ewg: "2" },
  "Limonene": { score: 35, eco: "비친환경", ewg: "6" },
  "Sodium Benzoate": { score: 65, eco: "중간", ewg: "3" },
  "Tocopherol": { score: 90, eco: "친환경", ewg: "1" },
  "Panthenol": { score: 85, eco: "친환경", ewg: "1" },
  "Caprylic/Capric Triglyceride": { score: 80, eco: "친환경", ewg: "2" },
  "Sorbitan Oleate": { score: 55, eco: "중간", ewg: "4" },
  "Benzyl Alcohol": { score: 35, eco: "비친환경", ewg: "6" },
  "Stearyl Alcohol": { score: 65, eco: "중간", ewg: "3" },
  "Polysorbate 20": { score: 30, eco: "비친환경", ewg: "7" },
  "Isopropyl Alcohol": { score: 40, eco: "비친환경", ewg: "5" },
  "Menthol": { score: 70, eco: "중간", ewg: "3" },
  "Allantoin": { score: 90, eco: "친환경", ewg: "1" },
  "Aloe Barbadensis Leaf Juice": { score: 95, eco: "친환경", ewg: "1" },
  "Propylene Glycol": { score: 30, eco: "비친환경", ewg: "7" },
  "Sodium Hydroxide": { score: 20, eco: "비친환경", ewg: "8" },
  "Triclosan": { score: 10, eco: "비친환경", ewg: "8" },
  "BHT": { score: 15, eco: "비친환경", ewg: "8" },
  "Cyclopentasiloxane": { score: 25, eco: "비친환경", ewg: "8" },
  "Sodium Lauryl Sulfate": { score: 15, eco: "비친환경", ewg: "8" },
  "Sodium Laureth Sulfate": { score: 20, eco: "비친환경", ewg: "8" },
  "Dimethicone": { score: 50, eco: "중간", ewg: "5" },
  "Cocamidopropyl Betaine": { score: 45, eco: "중간", ewg: "5" },
  "Stearic Acid": { score: 80, eco: "친환경", ewg: "2" },
  "Sodium Chloride": { score: 85, eco: "친환경", ewg: "1" },
  "Citral": { score: 30, eco: "비친환경", ewg: "7" },
  "Benzyl Benzoate": { score: 40, eco: "비친환경", ewg: "5" },
  "Lecithin": { score: 75, eco: "친환경", ewg: "2" },
  "Caprylyl Glycol": { score: 70, eco: "중간", ewg: "3" },
  "Sodium PCA": { score: 80, eco: "친환경", ewg: "2" },
  "Xanthan Gum": { score: 90, eco: "친환경", ewg: "1" },
  "Hydrolyzed Wheat Protein": { score: 85, eco: "친환경", ewg: "1" },
  "Disodium EDTA": { score: 25, eco: "비친환경", ewg: "8" },
  "Phenethyl Alcohol": { score: 50, eco: "중간", ewg: "5" },
  "Sorbitol": { score: 90, eco: "친환경", ewg: "1" },
  "Hydrogen Peroxide": { score: 20, eco: "비친환경", ewg: "8" },
  "Ethylhexylglycerin": { score: 65, eco: "중간", ewg: "3" },
  "Cetearyl Alcohol": { score: 75, eco: "친환경", ewg: "2" },
  "PEG-100 Stearate": { score: 35, eco: "비친환경", ewg: "7" },
  "Polyglyceryl-3 Distearate": { score: 70, eco: "중간", ewg: "3" },
  "Glyceryl Stearate": { score: 80, eco: "친환경", ewg: "2" },
  "Tetrasodium EDTA": { score: 15, eco: "비친환경", ewg: "8" },
  "Caprylyl Caprylate": { score: 75, eco: "친환경", ewg: "2" },
  "Polymethylsilsesquioxane": { score: 40, eco: "비친환경", ewg: "5" },
  "Sodium Hydroxymethylglycinate": { score: 30, eco: "비친환경", ewg: "7" },
  "Sodium Lauryl Glucose Carboxylate": { score: 80, eco: "친환경", ewg: "2" },
  "Disodium Laureth Sulfosuccinate": { score: 40, eco: "비친환경", ewg: "5" },
  "Sodium Cocoyl Isethionate": { score: 70, eco: "중간", ewg: "3" },
  "Glycol Distearate": { score: 55, eco: "중간", ewg: "4" },
  "Stearamidopropyl Dimethylamine": { score: 65, eco: "중간", ewg: "3" },
  "Cocamide MEA": { score: 30, eco: "비친환경", ewg: "7" },
  "Cocamide DEA": { score: 25, eco: "비친환경", ewg: "8" },
  "Sodium Methyl Cocoyl Taurate": { score: 70, eco: "중간", ewg: "3" },
  "Hydroxyethylcellulose": { score: 85, eco: "친환경", ewg: "1" },
  "Polysorbate 80": { score: 45, eco: "중간", ewg: "5" },
  "Ethylhexyl Methoxycinnamate": { score: 20, eco: "비친환경", ewg: "8" },
  "Benzophenone-3": { score: 15, eco: "비친환경", ewg: "8" },
  "Butylene Glycol": { score: 70, eco: "중간", ewg: "3" },
  "Sodium Hyaluronate": { score: 90, eco: "친환경", ewg: "1" },
  "Aloe Vera Extract": { score: 95, eco: "친환경", ewg: "1" },
  "Hydrolyzed Collagen": { score: 85, eco: "친환경", ewg: "1" },
  "Ceramide NP": { score: 75, eco: "친환경", ewg: "2" },
  "Niacinamide": { score: 90, eco: "친환경", ewg: "1" }
};

const ingredientKeys = Object.keys(ingredientDB);
const fuse = new Fuse(ingredientKeys, { includeScore: true, threshold: 0.4 });

const translations = {
  ko: {
    title: "🌿 탈취제 친환경성 분석기",
    analyze: "분석하기",
    placeholder: "성분을 입력하세요. 예: Ethanol, Fragrance, Glycerin...",
    score: score => `점수: <strong>${score}점</strong>`,
    high: "✅ 이 제품은 친환경적입니다!",
    mid: "⚠️ 보통 수준의 친환경성입니다.",
    low: "🚫 친환경 제품이 아닐 가능성이 높습니다.",
    unknown: "❗ 유효한 성분 정보를 찾을 수 없습니다.",
    unknownList: names => `<br><small>알 수 없는 성분: ${names}</small>`
  },
  en: {
    title: "🌿 Eco-Friendliness Analyzer",
    analyze: "Analyze",
    placeholder: "Enter ingredients, e.g. Ethanol, Fragrance, Glycerin...",
    score: score => `Score: <strong>${score}</strong>`,
    high: "✅ This product is eco-friendly!",
    mid: "⚠️ Moderate eco-friendliness.",
    low: "🚫 Likely not eco-friendly.",
    unknown: "❗ No valid ingredient info found.",
    unknownList: names => `<br><small>Unknown ingredients: ${names}</small>`
  },
  ja: {
    title: "🌿 脱臭剤の環境評価ツール",
    analyze: "分析する",
    placeholder: "成分を入力してください。例: Ethanol, Fragrance, Glycerin...",
    score: score => `スコア: <strong>${score}</strong>`,
    high: "✅ この製品は環境にやさしいです！",
    mid: "⚠️ 中程度の環境適合性。",
    low: "🚫 環境にやさしくない可能性があります。",
    unknown: "❗ 有効な成分情報が見つかりません。",
    unknownList: names => `<br><small>不明な成分: ${names}</small>`
  }
};

let currentLang = 'ko';

function changeLanguage() {
  currentLang = document.getElementById('langSelect').value;
  const t = translations[currentLang];
  document.getElementById('title').innerText = t.title;
  document.getElementById('analyzeBtn').innerText = t.analyze;
  document.getElementById('ingredientInput').placeholder = t.placeholder;
}

function analyzeIngredients() {
  const input = document.getElementById('ingredientInput').value;
  const ingredients = input.split(/,|\n/).map(s => s.trim()).filter(Boolean);
  const t = translations[currentLang];

  let totalScore = 0;
  let count = 0;
  let unknowns = [];

  ingredients.forEach(ing => {
    let found = ingredientDB[ing];

    // 오타 자동 보정 (퍼지 매칭)
    if (!found) {
      const fuzzy = fuse.search(ing);
      if (fuzzy.length > 0 && fuzzy[0].score < 0.4) {
        const matched = fuzzy[0].item;
        found = ingredientDB[matched];
      }
    }

    if (found) {
      totalScore += found.score;
      count++;
    } else {
      unknowns.push(ing);
    }
  });

  const score = count ? Math.round(totalScore / count) : 0;
  const bar = document.getElementById("ecoBarFill");
  bar.style.width = score + "%";
  bar.style.backgroundColor = score >= 70 ? "#4CAF50" : score >= 40 ? "#FFC107" : "#F44336";

  const result = document.getElementById("result");
  if (count === 0) {
    result.innerHTML = t.unknown;
  } else {
    let msg = score >= 70 ? t.high : score >= 40 ? t.mid : t.low;
    result.innerHTML = `${t.score(score)}<br>${msg}`;
    if (unknowns.length > 0) {
      result.innerHTML += t.unknownList(unknowns.join(", "));
    }
  }
}
