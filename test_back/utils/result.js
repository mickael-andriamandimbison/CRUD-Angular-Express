class Result {
  static Ok(res, message = "Succès", data = null) {
    return res.status(200).json({
      success: true,
      status: 200,
      message,
      data,
    });
  }

  static created(res, message = "Créé avec succès", data = null) {
    return res.status(201).json({
      success: true,
      status: 201,
      message,
      data,
    });
  }

  static notFound(res, message = "non trouvé") {
    return res.status(404).json({
      success: false,
      status: 404,
      message,
    });
  }

  static error(res, error = "Erreur interne du serveur", status = 500) {
    const message = typeof error === "string" ? error : error.message;

    return res.status(status).json({
      success: false,
      status,
      message,
    });
  }
}


module.exports = Result