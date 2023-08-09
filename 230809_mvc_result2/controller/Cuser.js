import * as User from "../model/User.js";

export const index = (req, res) => {
  res.render("index");
};
export const signup = (req, res) => {
  res.render("signup");
};
export const signin = (req, res) => {
  res.render("signin");
};
export const post_signup = async (req, res) => {
  try {
    await User.post_signup(req.body);
    res.send({ result: true });
  } catch (error) {
    console.log(error);
    res.send({ result: false });
  }
};
export const post_signin = async (req, res) => {
  try {
    const result = await User.post_signin(req.body);
    console.log("result", result);
    if (result.length > 0) {
      res.send({ result: true, data: result[0] });
    } else {
      res.send({ result: false, data: null });
    }
  } catch (error) {
    console.log(error);
  }
};
export const post_profile = async (req, res) => {
  try {
    const result = await User.post_profile(req.body);
    if (result.length > 0) {
      res.render("profile", { data: result[0] });
    } else {
      res.redirect("/user/signin");
    }
  } catch (error) {
    console.log(error);
  }
};

export const edit_profile = async (req, res) => {
  try {
    await User.edit_profile(req.body);
    res.status(200).send({ result: true });
  } catch (error) {
    console.log(error);
  }
};

export const delete_profile = async (req, res) => {
  try {
    await User.delete_profile(req.body.id);
    res.send({ result: true });
  } catch (error) {
    console.log(error);
  }
};
