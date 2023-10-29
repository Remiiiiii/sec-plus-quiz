let questions = [
  {
    numb: 1,
    question:
      "GCGA, a software development company, occasionally updates its software with major updates and minor patches. Administrators load these updates to the company website along with a hash associated with each update. Which of the following BEST describes the purpose of the hash?",
    answer: "B. Integrity of updates and patches",
    explanation:
      "The hash provides integrity for the updates and patches so that users can verify they have not been modified. Installing updates and patches increases the availability of the application. Confidentiality is provided by encryption. The hashes are for the updates and patches, so they do not provide integrity for the application.",
    options: [
      "A. Availability of updates and patches",
      "B. Integrity of updates and patches",
      "C. Confidentiality of updates and patches",
      "D. Integrity of the application",
    ],
  },
  {
    numb: 2,
    question:
      "Users in your organization sign their emails with digital signatures. Which of the following provides integrity for these digital signatures?",
    answer: "A. Hashing",
    explanation:
      "Hashing provides integrity for digital signatures and other data. A digital signature is a hash of the message encrypted with the sender's private key, but the encryption doesn't provide integrity. The digital signature provides non-repudiation, but non-repudiation does not provide integrity. The private key and public key are both needed, but the private key does not provide integrity.",
    options: [
      "A. Hashing",
      "B. Encryption",
      "C. Non-repudiation",
      "D. Private key",
    ],
  },
  {
    numb: 3,
    question:
      "While reviewing logs on a web server hosted by your organization, you notice multiple logon failures to an FTP account, but they're only happening about once every 30 minutes. You also see that the same password is being tried against the SSH account right after the FTP account login failure. What BEST describes what is happening?",
    answer: "D. Spraying attack",
    explanation:
      "This indicates a password-spraying attack. It loops through a list of accounts, guessing a password for one account at a time, and then guessing the same password for a different account. In this scenario, the attack may be guessing passwords for other servers before it returns to the web server. A brute force attack attempts to guess all possible character combinations for a password, and a dictionary attack uses a dictionary of words to try to discover the correct password. A spraying attack could use either a brute force method or a dictionary method when guessing the password; however, these methods do not loop through a list of user accounts. In a plaintext attack (also called a known plaintext attack), an attacker has samples of known plaintext and can use these samples to decrypt ciphertext that includes this plaintext.",
    options: [
      "A. Brute force attack",
      "B. Dictionary attack",
      "C. Plaintext attack",
      "D. Spraying attack",
    ],
  },
  {
    numb: 4,
    question:
      "An online application requires users to log on with their email address and a password. The application encrypts the passwords in a hashed format. Which of the following can be added to decrease the likelihood that attackers can discover these passwords?",
    answer: "B. Salt",
    explanation:
      "A password salt is additional random characters added to a password before hashing the password, and it decreases the success of password attacks. Rainbow tables are used by attackers and contain precomputed hashes, and salting is intended to specifically thwart rainbow table attacks. A digital signature provides authentication, non-repudiation, and integrity, but it doesn't protect passwords. Input validation techniques verify data is valid before using it, and they are unrelated to protecting hidden passwords.",
    options: [
      "A. Rainbow tables",
      "B. Salt",
      "C. Digital signatures",
      "D. Input validation",
    ],
  },
  {
    numb: 5,
    question:
      "What is the primary difference between a block cipher and a stream cipher?",
    answer: "A. A stream cipher encrypts data 1 bit or 1 byte at a time",
    explanation:
      "A stream cipher encrypts data a single bit or a single byte at a time and is more efficient when the size of the data is unknown, such as streaming audio or video. A block cipher encrypts data in specific-sized blocks, such as 64-bit blocks or 128-bit blocks. Both are used with symmetric encryption algorithms.",
    options: [
      "A. A stream cipher encrypts data 1 bit or 1 byte at a time",
      "B. A block cipher encrypts data 1 bit or 1 byte at a time",
      "C. Stream ciphers are used for symmetric encryption, but block ciphersare used for asymmetric encryption",
      "D. Block ciphers are used for symmetric encryption, but stream ciphersare used for asymmetric encryption.",
    ],
  },
  {
    numb: 6,
    question:
      "A developer is creating an application that will encrypt and decrypt data on mobile devices. These devices don't have a lot of processing power. Which of the following cryptographic methods has the LEAST overhead and can provide encryption for these mobile devices?",
    answer: "A. Elliptic curve cryptography",
    explanation:
      "Elliptic curve cryptography (ECC) has minimal overhead and is often used with mobile devices for encryption. Perfect forward secrecy refers to session keys and provides assurances that session keys will not be compromised even if a private key is later compromised. Salting adds random characters to a password before hashing it to thwart rainbowtable attacks. Digital signatures provide integrity, authentication, and non-repudiation, but not encryption.",
    options: [
      "A. Elliptic curve cryptography",
      "B. Perfect forward secrecy",
      "C. Salting",
      "D. Digital signatures",
    ],
  },
  {
    numb: 7,
    question:
      "You are configuring a web server that will be used by salespeople via the Internet. Data transferred to and from the server needs to be encrypted, so you are tasked with requesting a certificate for the server. Which of the following would you MOST likely use to request the certificate?",
    answer: "C. CSR",
    explanation:
      "You would request a certificate with a certificate signing request (CSR). It uses a specific format to request a certificate. You submit the CSR to a certificate authority (CA), but the request needs to be in the CSR format. A certificate revocation list (CRL) is a list of revoked certificates. The Online Certificate Status Protocol (OCSP) is an alternate method of validating certificates and indicates if a certificate is good, revoked, or unknown.",
    options: ["A. CA", "B. CRL", "C. CSR", "D. OCSP"],
  },
  {
    numb: 8,
    question:
      "Users within an organization frequently access public web servers using HTTPS. Management wants to ensure that users can verify that certificates are valid even if the public CAs are temporarily unavailable. Which of the following should be implemented to meet this need?",
    answer: "B. CRL",
    explanation:
      "A certificate revocation list (CRL) can meet this need because CRLs are cached. If the public certificate authority (CA) is not reachable due to any type of connection outage or CA outage, the cachedCRL can be used if the cache time has not expired. The Online CertificateStatus Protocol (OCSP) works in real time where the client queries the CA with the serial number of the certificate. If the CA is unreachable, the certificate cannot be validated. A private CA is used within an organization and cannot validate certificates from a public CA. You request a certificate with a certificate signing request (CSR), but the CSR doesn't validate an issued certificate.",
    options: ["A. OCSP", "B. CRL", "C. Private CA", "D. CSR"],
  },
  {
    numb: 9,
    question:
      "Your organization hosts an internal website used only by employees. The web site uses a certificate issued by a private CA and the network downloads a CRL from the CA once a week. However, after a recent compromise, security administrators want to use a real-time alternative to the CRL. Which of the following will BEST meet this need?",
    answer: "D. OCSP",
    explanation:
      "The Online Certificate Status Protocol (OCSP) provides real-time responses to validate certificates issued by a certificate authority(CA). A certificate revocation list (CRL) includes a list of revoked certificates, but if it is only downloaded once a week, it can quickly be out of date. None of the other answers validates certificates. In the context of certificates, a subject alternative name (SAN) certificate is used for multiple domains that have different names but are owned by the same organization. A certificate signing request (CSR) is used to request a certificate. Aregistration authority (RA) accepts CSRs for a CA.",
    options: ["A. SAN", "B. CSR", "C. RA", "D. OCSP"],
  },
  {
    numb: 10,
    question:
      "An organization hosts several web servers in a web farm used for e-commerce. Due to recent attacks, management is concerned that attackers might try to redirect website traffic, allowing the attackers to impersonate their e-commerce site. Which of the following methods will address this issue?",
    answer: "C. Pinning",
    explanation:
      "Public key pinning provides clients with a list of public key hashes that clients can use to detect website impersonation attempts. Stapling reduces Online Certificate Status Protocol (OCSP) traffic by appending a timestamped, digitally signed OCSP response to a certificate. Perfect forward secrecy ensures that the compromise of one session keydoes not compromise other session keys used in the past. Key stretching techniques add additional bits (salts) to passwords, making them harder to crack.",
    options: [
      "A. Stapling",
      "B. Perfect forward secrecy",
      "C. Pinning",
      "D. Key stretching",
    ],
  },
  {
    numb: 11,
    question:
      "Management has mandated the use of digital signatures by all personnelwithin your organization. Which of the following use cases does thissupport?",
    answer: "D. Supporting non-repudiation",
    explanation:
      "Digital signatures will support a use case of supporting-repudiation. Digital signatures also provide integrity and authentication, but these weren't available answers. Digital signatures do not encrypt data, so they do not support a use case of supporting confidentiality. Redundancy and fault-tolerance solutions will increase availability. Steganography is one way of supporting obfuscation.",
    options: [
      "A. Supporting confidentiality",
      "B. Supporting availability",
      "C. Supporting obfuscation",
      "D. Supporting non-repudiation",
    ],
  },
  {
    numb: 12,
    question:
      "A DLP system detected confidential data being sent out via email from Bart's account. However, he denied sending the email. Management wants to implement a method that would prevent Bart from denying accountability in the future. Which of the following are they trying to enforce?",
    answer: "D. Non-repudiation",
    explanation:
      "Non-repudiation methods such as digital signatures prevent users from denying they took an action. In this scenario, if a data loss protection (DLP) system detected the outgoing email and it was signed with Bart's account using a digital signature, he couldn't believably deny sending it. Encryption methods protect confidentiality. Access control methods protect access to data.",
    options: [
      "A. Confidentiality",
      "B. Encryption",
      "C. Access control",
      "D. Non-repudiation",
    ],
  },
  {
    numb: 13,
    question:
      "Your organization recently updated the security policy and mandated that emails sent by all upper-level executives include a digital signature. Which security goal does this policy address?",
    answer: "D. Authentication",
    explanation:
      "A digital signature is an encrypted hash of a message and it can be used to provide authentication, integrity, and non-repudiation. Authentication identifies the sender of the email. Encryption provides confidentiality and prevents unauthorized disclosure. Obfuscation methods attempt to make something harder to read, but a digital signature doesn't provide obfuscation. Hashing is a method used to provide integrity, but hashing by it isn't a security goal.",
    options: [
      "A. Confidentiality",
      "B. Hashing",
      "C. Obfuscation",
      "D. Authentication",
    ],
  },
  {
    numb: 14,
    question:
      "You are tasked with getting prices for certificates. You need to find a source that will provide a certificate that can be used for multiple domains that have different names. Which of the following certificates is the choice?",
    answer: "A. SAN",
    explanation:
      "A subject alternative name (SAN) certificate is used for multiple domains that have different names but are owned by the same organization. A domain-validated certificate indicates that the certificate requestor has some control over a Domain Name System (DNS) domain. Extended validation certificates use additional steps beyond domain validation. A wildcard certificate starts with an asterisk (*) and can be used for multiple domains, but each domain name must have the same root domain.",
    options: [
      "A. SAN",
      "B. Domain validation",
      "C. Extended validation",
      "D. Wildcard",
    ],
  },
  {
    numb: 15,
    question:
      "Your organization recently lost access to some decryption keys, resulting in the loss of some encrypted data. The chief information officer(CIO) mandated the creation of a key escrow. Which of the following cryptographic keys are MOST likely to be stored in key escrow?",
    answer: "B. Private",
    explanation:
      "Copies of private keys are typically stored in a key escrow so that data encrypted with a private key can be retrieved if the original private key is no longer accessible. Public keys are available to anyone so there is no need to store them in a key escrow. An ephemeral key has a short lifetime and is re-created for each session. A session key is only used for a single session so wouldn't be stored in a key escrow.",
    options: ["A. Public", "B. Private", "C. Ephemeral", "D. Session"],
  },
];
