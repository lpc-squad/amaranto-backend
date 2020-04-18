module.exports= `
type Clinical_Record{
    _id: ID!,
    doctor_id: Doctor,
    patient_id: Patient,
    diagnosis: String,
    indications: String,
    must_have: String,
    _updatedAt: Date,
    _createdAt: Date
}

type Query{
    clinical_records: [Clinical_Record]
}`;