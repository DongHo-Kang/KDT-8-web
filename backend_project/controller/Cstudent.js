const { Student, StudentProfile, Classes } = require("../models/index");
const { use } = require("../routes/student");

exports.index = (req, res) => {
  res.render("index");
};

exports.post_student = async (req, res) => {
  try {
    const { userid, email, password, name, major, enroll } = req.body;
    const user = await Student.create(
      {
        userid,
        password,
        email,
        StudentProfile: /*models/StudentProfil.js에 있는 테이블 이름*/ {
          //외래키부분.
          name,
          major,
          enroll,
        },
      },
      //include: 쿼리를 실행할때 관련된 모델의 데이터도 함께 조회할 수 있도록 하는 옵션
      { include: StudentProfile }
    );
    console.log(user);
    res.send(user);
  } catch (error) {
    console.log(error);
  }
};
exports.post_class = async (req, res) => {
  try {
    const {
      name,
      room,
      code,
      teacher_name,
      StudentId /*workbench에서 보고 외래키 확인*/,
    } = req.body;
    const classes = await Classes.create({
      name,
      room,
      code,
      teacher_name,
      StudentId,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.get_student = async (req, res) => {
  try {
    const student = await Student.findAll({
      attributes: ["userid", "email"],
      include: [{ model: StudentProfile, attributes: ["major", "enroll"] }],
    });
    res.send(student);
  } catch (error) {
    console.log(error);
  }
};
