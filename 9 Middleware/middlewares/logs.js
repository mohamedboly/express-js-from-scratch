function logs(req, res, next) {
  console.log("debut middleware");
  console.log("Fin  middleware");
  next();
}

export default logs;
