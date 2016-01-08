export default (html, initialState) => {
  return `
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>DbP tech prototype</title>
  <link href="static/main.css" rel="stylesheet" type="text/css" />
</head>
<body style="margin: 0;">
  <div id="app" style="height: 100%;">${html}</div>
  <script>
    window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
  </script>
  <script src="static/client.js"></script>
</body>
</html>
  `
}
