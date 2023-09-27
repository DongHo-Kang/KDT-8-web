import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //handleSubmit : 두 개의 함수를 받는데 하나는 유효할때 실행되는 함수(필수), 유효하지 않을 때 실행되는 함수(선택)
  const onValid = (data) => {
    console.log("data", data);
  };

  //onInvalid : 오류처리
  const onInvalid = (error) => {
    console.log("err", error);
  };

  //errors: 전체 오류 처리
  console.log("errors", errors);

  //watch()는 상태 계속 체크한다.(입력되는 값을 계속 체크한다.)
  //   console.log(watch());
  //   console.log(watch("password"));

  return (
    <>
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        {/* useForm안에  register를 통해 username, email, password가 저장이 된다. */}
        <input
          type="text"
          {...register("username", {
            required: "이름을 입력하세요",
            minLength: { message: "최소 2글자 이상 작성하세요", value: 2 },
          })}
          placeholder="username"
        />
        <div>{errors.username?.message}</div>
        {/* ? 는 있는지 확인하고 있으면 나오고 없으면 안나온다. */}
        <br />
        <input
          type="text"
          {...register("email", {
            required: "이메일을 입력하세요",
            validate: {
              useGmail: (value) => {
                return (
                  value.includes("gmail.com") || "gmail로만 가입 가능합니다."
                );
              },
            },
          })}
          placeholder="email"
        />
        <br />
        <div>{errors.email?.message}</div>
        <input type="text" {...register("password")} placeholder="password" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
