const foods = {
  "Rice (1 cup)": { calories: 200, protein: 4, carbs: 45, fat: 0.5, sugar: 0, fiber: 1, iron: 3, calcium: 5, vitC: 1, sodium: 5 },
  "Dosa (1 piece)": { calories: 150, protein: 3, carbs: 25, fat: 4, sugar: 1, fiber: 2, iron: 4, calcium: 2, vitC: 5, sodium: 5 },
  "Idli (2 pieces)": { calories: 120, protein: 4, carbs: 24, fat: 1, sugar: 1, fiber: 2 , iron: 3, calcium: 1, vitC: 4, sodium: 5},
  "Egg (1)": { calories: 70, protein: 6, carbs: 0.5, fat: 5, sugar: 0, fiber: 0 , iron: 3, calcium: 1, vitC: 4, sodium: 5},
  "Chicken (100g)": { calories: 165, protein: 31, carbs: 0, fat: 3.6, sugar: 0, fiber: 0, iron: 1, calcium: 3, vitC: 4, sodium: 5 },
  "Fish (100g)": { calories: 200, protein: 22, carbs: 0, fat: 12, sugar: 0, fiber: 0, iron: 5, calcium: 1, vitC: 4, sodium: 5 },
  "Banana (1)": { calories: 105, protein: 1.3, carbs: 27, fat: 0.4, sugar: 14, fiber: 3, iron: 2, calcium: 3, vitC: 3, sodium: 5 },
  "Apple (1)": { calories: 95, protein: 0.5, carbs: 25, fat: 0.3, sugar: 19, fiber: 4, iron: 4, calcium: 10, vitC: 1, sodium: 5 },
  "Milk (1 glass)": { calories: 120, protein: 8, carbs: 12, fat: 5, sugar: 12, fiber: 0, iron: 1, calcium: 5, vitC: 3, sodium: 5 },
  "Tea with sugar (1 cup)": { calories: 90, protein: 1, carbs: 15, fat: 2, sugar: 12, fiber: 0, iron: 4, calcium: 10, vitC: 2, sodium: 5 },
  "Chapati (1)": { calories: 120, protein: 3, carbs: 20, fat: 3, sugar: 1, fiber: 2, iron: 4, calcium: 1, vitC: 2, sodium: 5 },
  "Parotta (1)": { calories: 300, protein: 6, carbs: 45, fat: 12, sugar: 2, fiber: 2 , iron: 5, calcium: 10, vitC: 5, sodium: 5},
  "Samosa (1)": { calories: 260, protein: 5, carbs: 32, fat: 12, sugar: 2, fiber: 3, iron: 3, calcium: 1, vitC: 5, sodium: 5 },
  "Burger (1)": { calories: 350, protein: 18, carbs: 35, fat: 15, sugar: 5, fiber: 2, iron: 2, calcium: 5, vitC: 4, sodium: 5 },
  "Pizza slice (1)": { calories: 285, protein: 12, carbs: 36, fat: 10, sugar: 4, fiber: 2, iron: 4, calcium: 10, vitC: 5, sodium: 5 },
  "Coke (1 can)": { calories: 140, protein: 0, carbs: 39, fat: 0, sugar: 39, fiber: 0, iron: 5, calcium: 10, vitC: 4, sodium: 5 },
  "Chocolate (50g)": { calories: 270, protein: 3, carbs: 30, fat: 15, sugar: 25, fiber: 2, iron: 1, calcium: 5, vitC: 2, sodium: 5 },
  "Curd (1 cup)": { calories: 100, protein: 6, carbs: 8, fat: 4, sugar: 5, fiber: 0, iron: 1, calcium: 1, vitC: 3, sodium: 5 },
  "Dal (1 cup)": { calories: 180, protein: 12, carbs: 30, fat: 4, sugar: 2, fiber: 8 , iron: 5, calcium: 10, vitC: 3, sodium: 5},
   "Biriyani (1 plate)": { calories: 700, protein: 25, carbs: 90, fat: 25, sugar: 5, fiber: 4, iron: 3, calcium: 10, vitC: 4, sodium: 5 },
   "Paneer (100g)": { calories: 265, protein: 18, carbs: 6, fat: 20, sugar: 2, fiber: 0 , iron: 1, calcium: 10, vitC: 3, sodium: 5},
  "Rajma (1 cup)": { calories: 240, protein: 15, carbs: 40, fat: 3, sugar: 3, fiber: 12, iron: 1, calcium: 4, vitC: 1, sodium: 5 },
  "Chole (1 cup)": { calories: 260, protein: 12, carbs: 35, fat: 9, sugar: 4, fiber: 10 , iron: 4, calcium: 3, vitC: 4, sodium: 5},
  "Aloo Paratha (1)": { calories: 300, protein: 6, carbs: 40, fat: 12, sugar: 2, fiber: 4, iron: 1, calcium: 1, vitC: 5, sodium: 5 },
  "Masala Dosa (1)": { calories: 250, protein: 5, carbs: 40, fat: 8, sugar: 2, fiber: 4, iron: 1, calcium: 10, vitC: 4, sodium: 5 },
  "Poori (2 pieces)": { calories: 300, protein: 6, carbs: 35, fat: 15, sugar: 2, fiber: 3, iron: 1, calcium: 1, vitC: 3, sodium: 5 },
  "Curd Rice (1 cup)": { calories: 250, protein: 7, carbs: 40, fat: 6, sugar: 6, fiber: 1 , iron: 1, calcium: 10, vitC: 4, sodium: 5},
  "Lemon Rice (1 cup)": { calories: 280, protein: 6, carbs: 45, fat: 8, sugar: 2, fiber: 3 , iron: 2, calcium: 5, vitC: 2, sodium: 5},
  "Fried Rice (1 plate)": { calories: 450, protein: 12, carbs: 70, fat: 14, sugar: 4, fiber: 4 , iron: 1, calcium: 10, vitC: 5, sodium: 3},
  "Noodles (1 plate)": { calories: 500, protein: 10, carbs: 75, fat: 18, sugar: 5, fiber: 3, iron: 1, calcium: 10, vitC: 4, sodium: 5 },
  "Momos (6 pieces)": { calories: 350, protein: 12, carbs: 45, fat: 12, sugar: 3, fiber: 2, iron: 4, calcium: 3, vitC: 5, sodium: 4 },
  "Gulab Jamun (2 pieces)": { calories: 300, protein: 4, carbs: 45, fat: 10, sugar: 35, fiber: 0, iron: 2, calcium: 1, vitC: 4, sodium: 5 },
  "Jalebi (100g)": { calories: 450, protein: 2, carbs: 70, fat: 18, sugar: 55, fiber: 0, iron: 3, calcium: 1, vitC: 4, sodium: 5 },
  "Roti with Curry (1 meal)": { calories: 500, protein: 15, carbs: 70, fat: 15, sugar: 5, fiber: 8, iron: 2, calcium: 4, vitC: 4, sodium: 1 },
  "South Indian Meals (1 plate)": { calories: 800, protein: 20, carbs: 120, fat: 25, sugar: 10, fiber: 15, iron: 5, calcium: 10, vitC: 2, sodium: 5 },
  "Vegetable Curry (1 cup)": { calories: 150, protein: 4, carbs: 20, fat: 6, sugar: 4, fiber: 6, iron: 3, calcium: 10, vitC: 3, sodium: 5 }
};

let eatenFoods = [];
let chartInstance = null;

function loadFoods() {
  const foodSelect = document.getElementById("foodSelect");
  for (let food in foods) {
    let option = document.createElement("option");
    option.value = food;
    option.textContent = food;
    foodSelect.appendChild(option);
  }
}

function addFood() {
  const foodName = document.getElementById("foodSelect").value;
  const qty = parseInt(document.getElementById("quantity").value);

  eatenFoods.push({ name: foodName, qty: qty });

  renderFoodList();
}

function renderFoodList() {
  const list = document.getElementById("foodList");
  list.innerHTML = "";

  eatenFoods.forEach((item, index) => {
    const li = document.createElement("li");
    li.classList.add("food-item");

    li.innerHTML = `
      <span>${item.name} × ${item.qty}</span>
      <button class="delete-btn" onclick="deleteFood(${index})">Delete</button>
    `;

    list.appendChild(li);
  });
}

function deleteFood(index) {
  eatenFoods.splice(index, 1);
  renderFoodList();
}

function clearAllFoods() {
  eatenFoods = [];
  renderFoodList();
  document.getElementById("resultsBox").style.display = "none";
}


function calculateNutrition() {
  let total = { calories: 0, protein: 0, carbs: 0, fat: 0, sugar: 0, fiber: 0, iron: 0, calcium: 0, vitC: 0, sodium: 0 };


  eatenFoods.forEach(item => {
    let food = foods[item.name];
    total.calories += food.calories * item.qty;
    total.protein += food.protein * item.qty;
    total.carbs += food.carbs * item.qty;
    total.fat += food.fat * item.qty;
    total.sugar += food.sugar * item.qty;
    total.fiber += food.fiber * item.qty;
    total.iron += food.iron * item.qty;
    total.calcium += food.calcium * item.qty;
    total.vitC += food.vitC * item.qty;
    total.sodium += food.sodium * item.qty;

  });

  document.getElementById("resultsBox").style.display = "block";

  document.getElementById("calories").innerHTML = `<b>Total Calories:</b> ${total.calories}`;
  document.getElementById("protein").innerHTML = `<b>Protein:</b> ${total.protein.toFixed(1)} g`;
  document.getElementById("carbs").innerHTML = `<b>Carbs:</b> ${total.carbs.toFixed(1)} g`;
  document.getElementById("fat").innerHTML = `<b>Fat:</b> ${total.fat.toFixed(1)} g`;
  document.getElementById("sugar").innerHTML = `<b>Sugar:</b> ${total.sugar.toFixed(1)} g`;
  document.getElementById("fiber").innerHTML = `<b>Fiber:</b> ${total.fiber.toFixed(1)} g`;
  document.getElementById("iron").innerHTML = `<b>Iron:</b> ${total.iron.toFixed(1)} mg`;
document.getElementById("calcium").innerHTML = `<b>Calcium:</b> ${total.calcium.toFixed(1)} mg`;
document.getElementById("vitC").innerHTML = `<b>Vitamin C:</b> ${total.vitC.toFixed(1)} mg`;
document.getElementById("sodium").innerHTML = `<b>Sodium:</b> ${total.sodium.toFixed(1)} mg`;

  // -----------------------------
  // BMI + BMR Calculation
  // -----------------------------
  const age = parseFloat(document.getElementById("age").value);
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const gender = document.getElementById("gender").value;
  const activity = parseFloat(document.getElementById("activity").value);

  let bmi = null;
  let bmr = null;
  let calorieNeed = null;

  if (!isNaN(age) && !isNaN(height) && !isNaN(weight)) {
    bmi = weight / ((height / 100) * (height / 100));

    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    calorieNeed = bmr * activity;

    let bmiStatus = "";
    if (bmi < 18.5) bmiStatus = "Underweight";
    else if (bmi < 24.9) bmiStatus = "Normal";
    else if (bmi < 29.9) bmiStatus = "Overweight";
    else bmiStatus = "Obese";

    document.getElementById("bmiResult").innerHTML = `📌 BMI: ${bmi.toFixed(1)} (${bmiStatus})`;
    document.getElementById("bmrResult").innerHTML = `🔥 BMR: ${bmr.toFixed(0)} kcal/day`;
    document.getElementById("calorieNeed").innerHTML = `⚡ Daily Calories Needed: ${calorieNeed.toFixed(0)} kcal/day`;
  } else {
    document.getElementById("bmiResult").innerHTML = "📌 BMI: Enter your details above.";
    document.getElementById("bmrResult").innerHTML = "";
    document.getElementById("calorieNeed").innerHTML = "";
  }

  // -----------------------------
  // Warnings (existing)
  // -----------------------------
  let warnings = [];

  if (total.sugar > 50) warnings.push("High sugar intake → Increased Diabetes risk.");
  if (total.fat > 70) warnings.push("High fat intake → Increased Heart disease risk.");
  if (total.calories > 2500) warnings.push("High calories → Increased Obesity risk.");
  if (total.fiber < 20) warnings.push("Low fiber → Poor gut microbiome health, weak digestion.");

  if (warnings.length === 0) warnings.push("No major risks detected. Balanced intake 👍");

  const warningList = document.getElementById("warnings");
  warningList.innerHTML = "";
  warnings.forEach(w => {
    let li = document.createElement("li");
    li.textContent = w;
    warningList.appendChild(li);
  });

  // -----------------------------
  // Hydration
  // -----------------------------
  let water = total.calories > 2000 
    ? "Drink at least 3 Litres of water today 💧" 
    : "Drink at least 2 Litres of water today 💧";

  document.getElementById("hydration").textContent = water;

  // -----------------------------
  // Health Score out of 100
  // -----------------------------
  let score = 100;

  if (total.sugar > 50) score -= 20;
  if (total.fat > 70) score -= 15;
  if (total.calories > 2500) score -= 20;
  if (total.fiber < 20) score -= 15;
  if (total.protein < 60) score -= 15;

  if (score < 0) score = 0;

  let scoreStatus = "";
  if (score >= 80) scoreStatus = "Excellent 🌟";
  else if (score >= 60) scoreStatus = "Good 👍";
  else if (score >= 40) scoreStatus = "Average ⚠";
  else scoreStatus = "Poor ❌";

  document.getElementById("healthScore").innerHTML = `<b>Health Score:</b> ${score}/100 (${scoreStatus})`;

  // -----------------------------
  // Risk Meter Bars (0 - 100)
  // -----------------------------
  let diabetesRisk = Math.min(100, (total.sugar / 50) * 100);
  let heartRisk = Math.min(100, (total.fat / 70) * 100);
  let obesityRisk = Math.min(100, (total.calories / 2500) * 100);
  let gutRisk = Math.min(100, (20 / (total.fiber + 1)) * 100);

  document.getElementById("diabetesBar").style.width = diabetesRisk.toFixed(0) + "%";
  document.getElementById("heartBar").style.width = heartRisk.toFixed(0) + "%";
  document.getElementById("obesityBar").style.width = obesityRisk.toFixed(0) + "%";
  document.getElementById("gutBar").style.width = gutRisk.toFixed(0) + "%";

  // Change bar colors based on risk
  setRiskColor("diabetesBar", diabetesRisk);
  setRiskColor("heartBar", heartRisk);
  setRiskColor("obesityBar", obesityRisk);
  setRiskColor("gutBar", gutRisk);

  // -----------------------------
// Recommendations based on risk
// -----------------------------
let recommendations = [];

if (diabetesRisk >= 70) {
  recommendations.push("Reduce sugary drinks, sweets, and processed snacks.");
  recommendations.push("Eat more fiber foods: oats, dal, vegetables, greens.");
  recommendations.push("Choose whole grains instead of white rice often.");
}

if (heartRisk >= 70) {
  recommendations.push("Reduce fried foods and saturated fats (parotta, pakoda, samosa).");
  recommendations.push("Add healthy fats: nuts, fish, olive oil.");
  recommendations.push("Eat more fruits and vegetables for antioxidants.");
}

if (obesityRisk >= 70) {
  recommendations.push("Reduce portion size and avoid late-night heavy meals.");
  recommendations.push("Increase protein foods: eggs, chicken, paneer, dal.");
  recommendations.push("Prefer boiled/steamed foods instead of deep fried.");
}

if (gutRisk >= 70) {
  recommendations.push("Increase fiber: vegetables, fruits, legumes, whole grains.");
  recommendations.push("Add probiotics: curd, buttermilk.");
  recommendations.push("Drink more water and avoid too much junk food.");
}

if (recommendations.length === 0) {
  recommendations.push("Great job! Your intake looks balanced. Keep eating protein + vegetables daily 👍");
}

const recList = document.getElementById("recommendations");
recList.innerHTML = "";
recommendations.forEach(r => {
  let li = document.createElement("li");
  li.textContent = r;
  recList.appendChild(li);
});


  // -----------------------------
  // Charts
  // -----------------------------
  showChart(total.protein, total.carbs, total.fat);

  // Extra chart calories vs recommended
  let recommendedCalories = calorieNeed ? calorieNeed : 2000;
  showCalorieChart(total.calories, recommendedCalories);
}



function showChart(protein, carbs, fat) {
  const ctx = document.getElementById("macroChart").getContext("2d");

  if (chartInstance) chartInstance.destroy();

  chartInstance = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Protein", "Carbs", "Fat"],
      datasets: [{
        data: [protein, carbs, fat]
      }]
    }
  });
}

// -----------------------------
// Risk Bar Color Function
// -----------------------------
function setRiskColor(id, risk) {
  const bar = document.getElementById(id);

  if (risk < 40) bar.style.background = "#27ae60"; // green
  else if (risk < 70) bar.style.background = "#f39c12"; // orange
  else bar.style.background = "#e74c3c"; // red
}

// -----------------------------
// Extra Calories Bar Chart
// -----------------------------
let calorieChartInstance = null;

function showCalorieChart(consumed, recommended) {
  const ctx = document.getElementById("calorieChart").getContext("2d");

  if (calorieChartInstance) calorieChartInstance.destroy();

  calorieChartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Consumed Calories", "Recommended Calories"],
      datasets: [{
        label: "Calories",
        data: [consumed, recommended]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

// -----------------------------
// Load foods when page loads
// -----------------------------
window.onload = loadFoods;

