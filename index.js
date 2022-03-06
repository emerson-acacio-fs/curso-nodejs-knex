const database = require("./database");

// const dados = [
//   { nome: "ssssss5", preco: "12" },
//   { nome: "ssssss6", preco: "2" },
//   { nome: "ssssss7", preco: "3" },
//   { nome: "ssssss8", preco: "4" },
//   { nome: "ssssss9", preco: "9" },
// ];

// database
//   .insert(dados)
//   .into("games")
//   .then((d) => {
//     console.log(d);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// database
//   .select(["id", "nome"])
//   .table("games")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// database
//   .insert({ nome: "aaa", preco: 1254 })
//   .into("games")
//   .then((d) => {
//     database
//       .select(["id", "nome"])
//       .table("games")
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// database
//   .select(["nome"])
//   .where({ nome: "ssssss2" })
//   .where({ id: 2 })
//   .orWhere({ nome: "ssssss" })
//   .table("games")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// database
//   .select(["nome", "preco"])
//   .whereRaw("nome='ssssss' AND preco > 50")
//   .table("games")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// database
//   .raw("SELECT * FROM games")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// database
//   .where({ id: 4 })
//   .delete()
//   .table("games")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// database
//   .where({ id: 5 })
//   .update({ preco: 1.0 })
//   .table("games")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// database
//   .select()
//   .table("games")
//   .orderBy("nome", "asc")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// database
//   .insert({ nome: "bbbbb", game_id: 5 })
//   .table("estudio")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// database
//   .select([
//     "games.id",
//     "estudio.id as estudio_id",
//     "games.nome as nome",
//     "estudio.nome as estudio_nome",
//   ])
//   .table("games")
//   .innerJoin("estudio", "estudio.game_id", "games.id")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// database
//   .select(["games.*", "estudio.nome as estudio_nome"])
//   .table("games")
//   .innerJoin("estudio", "estudio.game_id", "games.id")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// database
//   .select(["games.*", "estudio.nome as estudio_nome"])
//   .table("games")
//   .innerJoin("estudio", "estudio.game_id", "games.id")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// database
//   .select([
//     "games.*",
//     "estudio.nome as estudio_nome",
//     "estudio.id as estudio_id",
//   ])
//   .table("games")
//   .innerJoin("estudio", "estudio.game_id", "games.id")
//   .where("games.id", 5)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// database
//   .select(["games.*", "estudio.nome as estudio_nome"])
//   .table("games")
//   .leftJoin("estudio", "estudio.game_id", "games.id")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// database
//   .select([
//     "games.*",
//     "estudio.nome as estudio_nome",
//     "estudio.id as estudio_id",
//   ])
//   .table("games_estudios")
//   .innerJoin("games", "games.id", "games_estudios.game_id")
//   .innerJoin("estudio", "estudio.id", "games_estudios.estudio_id")
//   .where("games.id", 10)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

async function testeTransation() {
  try {
    await database.transaction(async (trans) => {
      await database.insert({ nome: "4" }).table("estudio");
      await database.insert({ nome: "5" }).table("estudio");
      await database.insert({ nome: "6", preco: 55.2 }).table("games");
    });
  } catch (err) {
    console.log(err);
  }
}

testeTransation();
