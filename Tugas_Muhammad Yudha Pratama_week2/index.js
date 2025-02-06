let notes = [
  {
    id: 1,
    heading: "Mempelajari Javascript",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus non expedita similique tempora tempore exercitationem. Accusamus sint porro iste quos velit aperiam voluptas placeat error nulla maxime id, deserunt eum.",
    created_by: "John Doe",
    created_at: 1738146027613 // bisa menggunakan Date.now()
  }
]

const createNote = (heading, description, created_by) => {
  const NNote = {
    id: notes.length + 1,
    heading: heading,
    description: description,
    created_by: created_by,
    created_at: Date.now()
  };
  notes.push(NNote);
}

const readNote = () => {
  console.log(notes);
}

const updateNote = (id, NHead, NDesc) => {
  const Index = notes.findIndex(note => note.id === id);
  if (Index !== -1) {
    notes[Index].heading = NHead;
    notes[Index].description = NDesc;
  } else {
    console.log(`Catatan dengan ID ${id} tidak ditemukan.`);
  }
}

const deleteNote = (id) => {
  const Index = notes.findIndex(note => note.id === id);
  if (Index !== -1) {
    notes.splice(Index, 1);
  } else {
    console.log(`Catatan dengan ID ${id} tidak ditemukan.`);
  }
}

// mengetes kode (diharapkan untuk tidak diganti): 
createNote("Belajar React", "Mempelajari dasar-dasar React dan cara membuat komponen.", "Jane Doe")
readNote();
console.log("=================================================================================================================")
updateNote(1, "Mempelajari JavaScript Lanjutan", "Mempelajari konsep lanjutan dalam JavaScript.");
readNote();
console.log("=================================================================================================================")
deleteNote(1)
readNote()
