<?php
class PhoneForm
{
    /**
     * The submitted phone number.
     *
     * @var string
     */
    private $phoneNumber;

    /**
     * Regex patterns for different countries' phone numbers.
     *
     * @var array
     */
    private $patterns = [
        'Indian' => '/^\+91\s[6-9]\d{9}$/',
        'Indian Landline' => '/^(0141)-\d{6}$/',
        'United Kingdom' => '/^\+44\s\d{2}\s\d{4}\s\d{4}$/',
        'Australian' => '/^\+61\s\d{1}\s\d{4}\s\d{4}$/',
        'Germany' => '/^\+49\s\d{2}\s\d{8}$/',
        'France' => '/^\+33\s\d{1}\s\d{2}\s\d{2}\s\d{2}\s\d{2}$/',
        'Japan' => '/^\+81\s\d{2}-\d{4}-\d{4}$/',
        'South African' => '/^\+27\s\d{2}\s\d{3}\s\d{4}$/',
        'Brazil' => '/^\+55\s\d{2}\s\d{5}-\d{4}$/',
        'United States/Canada' => '/^\+1\s\(\d{3}\)\s\d{3}-\d{4}$/',
    ];

    /**
     * Constructor to handle the submitted phone number validation.
     * 
     * @return void
     */
    public function __construct()
    {
        // Retrieve and sanitize the input.
        $this->phoneNumber = htmlspecialchars($_POST['phone']);

        // Validate the phone number.
        $this->validatePhoneNumber();
    }

    /**
     * Validate the phone number against predefined patterns.
     * 
     * @return void
     */
    private function validatePhoneNumber()
    {
        // Loop through the patterns and check for a match.
        foreach ($this->patterns as $country => $pattern) {
            if (preg_match($pattern, $this->phoneNumber)) {
                echo "<h2>You entered valid $country number.</h2>";
                return;
            }
        }

        // If no match is found, display an error message.
        echo "<h2>Invalid Phone Number</h2>";
    }
}

// Instantiate the PhoneForm class if the form is submitted via POST.
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    new PhoneForm();
}

