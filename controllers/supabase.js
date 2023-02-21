const { createClient } = require("@supabase/supabase-js");
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
const select = "created_at, cici"; // Les colonnes qu'on peut lire en réponse d'un GET
const api = "coco"; //le nom de ma table

// GET UID - Supprime cette fonction si on n'utilise pas le middleware
async function getUID(id) {
  const uid = await supabase
  .from(api)
  .select("uid")
  .eq("id", id);
  return uid;
}

// GET ID
async function getNote(id) {
  const data = await supabase
    .from(api)
    .select(select)
    .eq("id", id);
  return data;
}

// GET ALL
async function getAllNote() {
  const data = await supabase
  .from(api)
  .select(select);
  return data;
}

// POST
async function addNote(content) {
  const data = await supabase
  .from(api)
  .insert(content);
  return data;
}

// UPDATE
async function updateNote(content, id) {
  const data = await supabase
  .from(api)
  .update(content)
  .eq("id", id);
  return data;
}

// DELETE
async function deleteNote(id) {
  const data = await supabase
  .from(api)
  .delete()
  .eq("id", id);
  return data;
}

module.exports = { addNote, getAllNote, getNote, updateNote, deleteNote, getUID }; // Supprime "getUID" de l'export si on n'utilise pas le middleware

