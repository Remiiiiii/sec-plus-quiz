let questions = [
  {
    numb: 1,
    question:
      "An outside consultant performed an audit of the Municipal House of Pancakes network. She identified a legacy protocol being used to access browser-based interfaces on switches and routers within the network. She recommended replacing the legacy protocol with a secure protocol to access these network devices using the same interface. Which of the following protocols should be implemented?",
    answer: "B. The newest fully supported version of TLS",
    options: [
      "A. The newest fully supported version of SSL",
      "B. The newest fully supported version of TLS",
      "C. The newest fully supported version of LDAPS",
      "D. The newest fully supported version of SNMP",
    ],
  },
  {
    numb: 2,
    question:
      "Your organization's security policy requires that confidential data transferred over the internal network must be encrypted. Which of the following protocols would BEST meet this requirement?",
    answer: "B. SSH",
    options: ["A. FTP", "B. SSH", "C. SNMPv3", "D. SRTP"],
  },
  {
    numb: 3,
    question:
      "Maggie needs to collect network device configuration information andnetwork statistics from devices on the network. She wants to protect the confidentiality of credentials used to connect to these devices. Which of the following protocols would BEST meet this need?",
    answer: "C. SNMPv3",
    options: ["A. SSH", "B. FTPS", "C. SNMPv3", "D. TLS"],
  },
  {
    numb: 4,
    question:
      "You are trying to determine what information attackers can gain about your organization using network reconnaissance methods via the Internet. Using a public wireless hot spot, you issue the following command:**nslookup -querytype=mx gcgapremium.com** You then see these results, on the left side of your screen. What does this tell you?",
    answer: "C. The mx1.emailsrvr.com is a backup mail server",
    options: [
      "A. 10.0.0.1 is the IP address of the primary mail server",
      "B. gcgapremium.com is unknown to DNS",
      "C. The mx1.emailsrvr.com is a backup mail server",
      "D. The MX servers are showing too much information to the public",
    ],
  },
  {
    numb: 5,
    question:
      "Administrators are configuring a server within your organization's screened subnet. This server will have the following capabilities when it is fully configured: (1)It will use RRSIG. (2)It will perform authenticated requests for A records. (3)It will perform authenticated requests for AAAA records. What BEST identifies the capabilities of this server?",
    answer: "D. DNSSEC",
    options: ["A. SSH", "B. SNMPv3", "C. S/MIME", "D. DNSSEC"],
  },
  {
    numb: 6,
    question:
      "Maggie regularly connects to a remote server named gcga using Secure Shell (ssh) from her Linux system. However, she has trouble remembering the password, and she wants to avoid using it without sacrificing security. She creates a cryptographic key pair to use instead. Which of the following commands is the BEST choice to use after creating the key pair?",
    answer: "A. ssh-copy-id -i ~.ssh/id_rsa.pub maggie@gcga",
    options: [
      "A. ssh-copy-id -i ~.ssh/id_rsa.pub maggie@gcga",
      "B. chmod 644 ~/.ssh/id_rsa",
      "C. ssh-keygen -t rsa",
      "D. ssh root@gcga",
    ],
  },
  {
    numb: 7,
    question:
      "You are tasked with enabling NTP on some servers within your organization's screened subnet. Which of the following use cases are you MOST likely supporting with this action?",
    answer: "B. Providing time synchronization",
    options: [
      "A. Encrypting voice and video transmissions",
      "B. Providing time synchronization",
      "C. Enabling email usage",
      "D. Encrypting data-in-transit",
    ],
  },
  {
    numb: 8,
    question:
      "Your organization has several switches in use throughout the internal network. Management wants to implement a security control to prevent unauthorized access to these switches within the network. Which of the following choices would BEST meet this need?",
    answer: "A. Disable unused ports",
    options: [
      "A. Disable unused ports",
      "B. Disable STP",
      "C. Enable SSH",
      "D. Enable DHCP",
    ],
  },
  {
    numb: 9,
    question:
      "Network administrators manage network devices remotely. However, a recent security audit discovered they are using a protocol that allows them to send credentials over the network in cleartext. Which of the following methods should be adopted to eliminate this vulnerability?",
    answer: "B. Use SSH",
    options: ["A. Use SNMPv2c", "B. Use SSH", "C. Use SSL", "D. Use SFTP."],
  },
  {
    numb: 10,
    question:
      "Which of the following devices would MOST likely have the following entries used to define its operation? (1)permit IP any any eq 80 (2)permit IP any any eq 4433 (3)deny IP any any",
    answer: "A. Firewall",
    options: [
      "A. Firewall",
      "B. Proxy server",
      "C. Web server",
      "D. Jump server",
    ],
  },
  {
    numb: 11,
    question:
      "Your organization's network looks like the following graphic, and you've been asked to verify that Firewall 1 has the correct settings: You're asked to verify the rules are configured correctly. Which rule, if any, should be changed to ensure Firewall 1 meets the stated requirements?",
    answer: "B. HTTP Outbound",
    options: [
      "A. HTTPS Outbound",
      "B. HTTP Outbound",
      "C. DNS",
      "D. Telnet",
      "E. SSH",
      "F. None. All rules are correct",
    ],
  },
  {
    numb: 12,
    question:
      "The Springfield Nuclear Power Plant has several stand-alone computers used for monitoring. Employees log on to these computers using a local account to verify proper operation of various processes. The CIO of the organization has mandated that these computers cannot be connected to the organization's network or have access to the Internet. Which of the following would BEST meet this requirement?",
    answer: "A. Air gap the computers",
    options: [
      "A. Air gap the computers",
      "B. Place the computers in a screened subnet",
      "C. Create a separate isolated network for these computers",
      "D. Place the computers within a VLAN",
    ],
  },
  {
    numb: 13,
    question:
      "You have added another router in your network. This router provides a path to a limited access network that isn't advertised. However, a network administrator needs to access this network regularly. Which of thefollowing could he do to configure his computer to access this limited network?",
    answer: "C. Use the route command",
    options: [
      "A. Implement QoS technologies",
      "B. Add a VLAN",
      "C. Use the route command",
      "D. Open additional ports on the router",
    ],
  },
  {
    numb: 14,
    question:
      "Several servers in your organization's screened subnet were recently attacked. After analyzing the logs, you discover that many of these attacks used TCP, but the packets were not part of an established TCP session. Which of the following devices would provide the BEST solution to prevent these attacks in the future?",
    answer: "B. Stateful firewall",
    options: [
      "A. Stateless firewall",
      "B. Stateful firewall",
      "C. Network firewall",
      "D. Web application firewall",
    ],
  },
  {
    numb: 15,
    question:
      "Your network currently has a dedicated firewall protecting access to aweb server. It is currently configured with only the following two rules in the ACL: (1)PERMIT TCP ANY ANY 443 (2)PERMIT TCP ANY ANY 80 You have detected DNS requests and DNS zone transfer requests coming through the firewall and you need to block them. Which of the following would meet this goal? (Select TWO. Each answer is a full solution.)",
    answer: [
      "D. Add the following rule to the firewall: DENY TCP ALL ALL 53",
      "E. Add an implicit deny rule at the end of the ACL",
    ],
    options: [
      "A. Add the following rule to the firewall: DENY TCP ALL ALL 53",
      "B. Add the following rule to the firewall: DENY UDP ALL ALL 53",
      "C. Add the following rule to the firewall: DENY TCP ALL ALL 25",
      "D. Add the following rule to the firewall: DENY TCP ALL ALL 53",
      "E. Add an implicit deny rule at the end of the ACL",
    ],
    numAnswersToSelect: 2,
  },
];
