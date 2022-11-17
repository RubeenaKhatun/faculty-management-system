import mongoose from "mongoose";
import { STRING_LITERAL_DROP_BUNDLE } from "next/dist/shared/lib/constants";

const testSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  profile: {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    fatherName: String,
    motherName: String,
    bloodGroup: String,
    designation: String,
    gender: String,
    dob: Date,
    adharNumber: Number,
    panNumber: String,
    mobileNumber: Number,
    email: String,
  },

  address: {
    state: String,
    district: String,
    houseNo: String,
    street: String,
    city: String,
    pincode: Number,
  },

  education: {
    ssc: {
      board: String,
      date: Date,
      gpa: Number,
    },
    inter: {
      board: String,
      date: Date,
      gpa: Number,
    },
    ug: {
      board: String,
      date: Date,
      gpa: Number,
    },
    pg: {
      board: String,
      date: Date,
      gpa: Number,
    },
    phd: {
      board: String,
      date: Date,
      gpa: Number,
    },
    others: {
      name: String,
      board: String,
      date: Date,
      gpa: Number,
    },
  },

  work: {
    designation: String,
    experience: Number,
    organization: String,
    natureOfWork: String,
    dateOfJoining: Date,
    duration: Number,
    typeOfEmployment: String,
    ratifiedService: String,
    subjects: [String],
  },

  workshops: {
    title: String,
    fromDate: Date,
    toDate: Date,
    year: Number,
  },

  journals: {
    name: String,
    volNumber: Number,
    impactFactor: String,
    issnNumber: Number,
    publisherName: String,
    indexing: Number,
    articleTitle: String,
    year: Number,
    pageNumbers: Number,
  },

  conferences: {
    publication: String,
    name: String,
    year: Number,
    venue: String,
    articleTitle: String,
    isbnNumber: Number,
    publisherName: String,
  },

  rd: {
    title: String,
    duration: Number,
    cost: Number,
    fundingAgency: String,
    startDate: Date,
    endDate: Date,
    status: String,
  },

  books: {
    title: String,
    isbnNumber: Number,
    volume: Number,
    publisherName: String,
    pageNumbers: Number,
  },

  awards: {
    award: String,
    year: Date,
    organization: String,
  },
});

const Test = mongoose.models.Test || mongoose.model("Test", testSchema);

export default Test;

// name: String,
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
