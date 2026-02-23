import * as yup from "yup";

export const CreateGoalSchema = yup.object({
    title: yup
    .string()
    .required("Title is required."),
    category: yup
    .string()
    .required("Category is required."),
    goalType: yup
    .string()
    .required("Goal type is required."),
    target: yup
    .number("Target must be a number.")
    .required("Target is required."),
   // startDate: yup
    //.date()
    //.required("Start date is required."),
}

)