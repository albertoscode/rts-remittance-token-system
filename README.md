# Remittance Token System (RTS) Project

## Table of Contents
- [Project Description](#project-description)
- [Scripts](#scripts)
- [System Compatibility](#system-compatibility)
- [Installation](#installation)
- [Usage](#usage)
- [Disclaimer](#disclaimer)
- [References](#references)
- [License](#license)
- [Contact Information](#contact-information)

## Project Description <a name="project-description"></a>
This project provides scripts for issuing a new token, RTS, on the XRP Ledger. The RTS token is designed to facilitate easy, cost-effective remittance payments across the Americas.

[Back to Top](#remittance-token-system-rts-project)

## Scripts <a name="scripts"></a>
The project contains the following scripts and files:

- [`issueToken.js`](#issuetokenjs) - Connects to the XRP Ledger, issues the new RTS token, and submits the transaction to the ledger.
- [`credentials.json`](#credentialsjson) - A JSON file where you store the issuer's address and secret, and the destination address for receiving the newly issued tokens.

[Back to Top](#remittance-token-system-rts-project)

## System Compatibility <a name="system-compatibility"></a>
The scripts are written in JavaScript and require Node.js to run. They should be compatible with any system that supports Node.js, including Windows, macOS, and Linux.

[Back to Top](#remittance-token-system-rts-project)

## Installation <a name="installation"></a>
1. Install Node.js and npm from [https://nodejs.org/](https://nodejs.org/).
2. Clone the repository or download the ZIP file and extract it.
3. Navigate to the project directory in your terminal.
4. Run `npm install` to install the `ripple-lib` package.

[Back to Top](#remittance-token-system-rts-project)

## Usage <a name="usage"></a>
1. In the project directory, create a `credentials.json` file containing your issuer's address and secret, and the destination address.
2. Run `node issueToken.js` to issue the new token.

Remember to use test addresses and secrets when developing and testing. Do not use real XRP unless you fully understand the implications.

[Back to Top](#remittance-token-system-rts-project)

## Disclaimer <a name="disclaimer"></a>
The scripts provided in this project are for educational and testing purposes only. They should not be used for real-world currency transactions without a thorough understanding of the risks and a comprehensive review by legal and financial professionals. The creators of this project are not responsible for any financial losses incurred through the use of these scripts.

[Back to Top](#remittance-token-system-rts-project)

## References <a name="references"></a>
- [RippleLib Documentation](https://ripple.com/build/rippleapi/)
- [XRP Ledger Documentation](https://xrpl.org/)

[Back to Top](#remittance-token-system-rts-project)

## License <a name="license"></a>
This project is licensed under the terms of the MIT license. See the [LICENSE](License.txt) file for license rights and limitations.

[Back to Top](#remittance-token-system-rts-project)

## Contact
For any further inquiries or questions, feel free to reach out:

- Email: [ah8664383@gmail.com](ah8664383@gmail.com)
- LinkedIn: [https://www.linkedin.com/in/albertoscode/](https://www.linkedin.com/in/albertoscode/)

[Back to Top](#remittance-token-system-rts-project)
