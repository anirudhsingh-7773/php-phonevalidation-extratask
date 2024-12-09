<!-- index.php -->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/styles.css">
  <title>Phone Validation</title>
</head>

<body>

  <section class="phone-validate">
    <div class="container">
      <div class="form-wrapper">

        <!-- Phone Number Form -->
        <form method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" class="form-element">
          <label for="phone">Enter Your Phone Number </label>
          <input type="text" name="phone" id="phone" oninput="phoneValidation('phone')">
          <span id="message"></span>

          <input type="submit" name="submit" id="submit" disabled>
          <br>
        </form>

        <!-- Include the PHP logic for handling form submission -->
        <?php require 'form.php'; ?>
      </div>
    </div>
  </section>


  <!-- External JavaScript for form validation -->
  <script src="js/scripts.js"></script>
</body>

</html>