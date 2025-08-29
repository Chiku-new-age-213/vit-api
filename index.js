import express from "express";

const app = express();
app.use(express.json());

app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;

    const evens = [];
    const odds = [];
    const alphabets = [];
    const specials = [];
    let sum = 0;

    data.forEach(item => {
      if (!isNaN(item)) {
        let num = parseInt(item);
        if (num % 2 === 0) evens.push(item);
        else odds.push(item);
        sum += num;
      } else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
      } else {
        specials.push(item);
      }
    });

    
    let concat = alphabets.join("");
    let rev = concat.split("").reverse();
    let altCaps = rev.map((ch, i) =>
      i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()
    ).join("");

    res.status(200).json({
      is_success: true,
      user_id: "Chirag_Dhawan_21072003",   
      email: "chiradg,dhawan2022@vitstudent.ac.in", 
      roll_number: "22BCE1080",            
      odd_numbers: odds,
      even_numbers: evens,
      alphabets,
      special_characters: specials,
      sum: sum.toString(),
      concat_string: altCaps
    });
  } catch (err) {
    res.status(500).json({ is_success: false, error: err.message });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
