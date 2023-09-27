import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    console.log(data);
  };
  console.log("errors", errors);
  const isValidNumber = (value) => /^[0-9]+$/.test(value);

  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          type="text"
          placeholder="이름"
          {...register("name", { required: "이름은 필수 항목입니다." })}
        />
        {errors.name?.message} <br />
        <input
          type="text"
          placeholder="나이"
          {...register("age", {
            validate: {
              useNum: (value) => {
                return (
                  isValidNumber(value) || "0 이상의 숫자만 입력 가능합니다."
                );
              },
            },
          })}
        />
        {errors.age?.message}
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
