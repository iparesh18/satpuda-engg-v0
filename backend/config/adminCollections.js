const Admission = require("../models/Admission.js");
const Contact = require("../models/Contact.js");

const COLLECTIONS = {
  admissions: {
    key: "admissions",
    label: "Admissions",
    model: Admission,
    description: "Admission applications submitted through the website.",
    searchFields: ["course", "fullName", "mobile", "email", "address", "message"],
    filterDefinitions: [
      { key: "dateFrom", field: "createdAt", label: "Date From", type: "date", mode: "gte" },
      { key: "dateTo", field: "createdAt", label: "Date To", type: "date", mode: "lte" },
      { key: "course", field: "course", label: "Course", type: "select", mode: "equals" },
      { key: "email", field: "email", label: "Email", type: "text", mode: "contains" },
      { key: "mobile", field: "mobile", label: "Mobile", type: "text", mode: "contains" }
    ],
    sortableFields: ["createdAt", "updatedAt", "course", "fullName", "email", "mobile"],
    columnOrder: ["course", "fullName", "mobile", "email", "address", "message", "createdAt", "updatedAt"],
    fieldLabels: {
      course: "Course",
      fullName: "Full Name",
      mobile: "Mobile",
      email: "Email",
      address: "Address",
      message: "Message",
      createdAt: "Created At",
      updatedAt: "Updated At"
    },
    previewFields: ["course", "fullName", "mobile"],
    defaultSortBy: "createdAt",
    defaultSortOrder: "desc"
  },
  contacts: {
    key: "contacts",
    label: "Contacts",
    model: Contact,
    description: "General inquiries submitted from the contact form.",
    searchFields: ["fullName", "email", "phone", "inquiryType", "subject", "message"],
    filterDefinitions: [
      { key: "dateFrom", field: "createdAt", label: "Date From", type: "date", mode: "gte" },
      { key: "dateTo", field: "createdAt", label: "Date To", type: "date", mode: "lte" },
      { key: "inquiryType", field: "inquiryType", label: "Inquiry Type", type: "select", mode: "equals" },
      { key: "email", field: "email", label: "Email", type: "text", mode: "contains" },
      { key: "mobile", field: "phone", label: "Mobile", type: "text", mode: "contains" }
    ],
    sortableFields: ["createdAt", "updatedAt", "fullName", "email", "phone", "inquiryType"],
    columnOrder: ["fullName", "email", "phone", "inquiryType", "subject", "message", "createdAt", "updatedAt"],
    fieldLabels: {
      fullName: "Full Name",
      email: "Email",
      phone: "Mobile",
      inquiryType: "Inquiry Type",
      subject: "Subject",
      message: "Message",
      createdAt: "Created At",
      updatedAt: "Updated At"
    },
    previewFields: ["fullName", "email", "inquiryType"],
    defaultSortBy: "createdAt",
    defaultSortOrder: "desc"
  }
};

function getAdminCollectionConfig(collectionName) {
  return COLLECTIONS[String(collectionName || "").toLowerCase()] || null;
}

function getAdminCollectionsList() {
  return Object.values(COLLECTIONS).map((collection) => ({
    key: collection.key,
    label: collection.label,
    description: collection.description,
    defaultSortBy: collection.defaultSortBy,
    defaultSortOrder: collection.defaultSortOrder,
    filterDefinitions: collection.filterDefinitions,
    sortableFields: collection.sortableFields,
    columnOrder: collection.columnOrder,
    fieldLabels: collection.fieldLabels,
    previewFields: collection.previewFields
  }));
}

module.exports = {
  COLLECTIONS,
  getAdminCollectionConfig,
  getAdminCollectionsList
};
