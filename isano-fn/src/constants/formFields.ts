export const loginFields = [
  {
    labelText: "Email address",
    labelFor: "email-address",
    id: "email",
    name: "email",
    type: "email",
    autoComplete: "email",
    isRequired: true,
    placeholder: "Email address",
  },
  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    isRequired: true,
    placeholder: "Enter Password",
  },
];

export const resetPasswordField = {
  name: "email",
  type: "email",
  placeholder: "Email Address",
  isRequired: true,
};

export const addCategoryFields = [
  {
    labelText: "Category Name",
    labelFor: "category-name",
    id: "category-name",
    name: "name",
    type: "text",
    autoComplete: "off",
    isRequired: true,
    placeholder: "Category Name",
  },
]