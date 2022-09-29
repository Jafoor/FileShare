import React from "react";

// Example
// const title = "Title of the page";
// const description = "Description of the page";
// const form = {
//     action: "type of your form action",
//     // Other necessary methods
//   }
// const inputs = [{
//     lavel: "Input lavel",
//     isRequired: true or false,
//     props: {
//       id: "give a unique id for every input",
//       placeholder: "Input's Placeholder",
//       type: "Type of your input",
//       name: "Name field of your inputs",
//       // other necessary props can be added
//     },
//   },];

//   const button = {
//     buttonName: "Name of the Button",
//     props: {
//       type: 'button'
//     }
//   };

// // Render the form like
// <Form
//     title={title}
//     description = {description}
//     form={form}
//     inputs={inputs}
//     button={button}
// />

export default function CreateBlock({
  title,
  description,
  inputs,
  form,
  button,
}) {
  return (
    <div className="m-auto w-full max-w-xs pt-20">
      <h1 className=" text-3xl font-bold text-slate-700">{title}</h1>
      <p className="py-3 text-slate-700">{description}</p>
      <form {...form}>
        {inputs.map((inp) => {
          return (
            <div className="my-3" key={inp.props.id}>
              <label className="mb-1 block text-sm text-slate-700">
                {inp.lavel}
                <sup className="text-red-600">{inp.isRequired ? "*" : ""}</sup>
              </label>
              <input
                {...inp.props}
                className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              />
            </div>
          );
        })}

        <button
          className={`focus:shadow-outline mt-4 rounded  ${
            button.formReadyToSubmit ? "bg-blue-700 text-white" : "bg-slate-100"
          } py-2 px-4 font-bold text-gray-500 focus:outline-none`}
          {...button.props}
        >
          {button.buttonName}
        </button>
      </form>
    </div>
  );
}