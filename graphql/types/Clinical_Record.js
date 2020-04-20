module.exports= `
type Clinical_Record{
    _id: ID!,
    doctor: Doctor,
    patient: Patient,
    diagnosis: String,
    indications: String,
    must_have: String,
    _updatedAt: Date,
    _createdAt: Date
}

type Query{
    clinical_records: [Clinical_Record]
}`;