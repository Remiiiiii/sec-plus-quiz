let questions = [
  {
    numb: 1,
    question:
      "An outside consultant performed an audit of the Municipal House of Pancakes network. She identified a legacy protocol being used to access browser-based interfaces on switches and routers within the network. She recommended replacing the legacy protocol with a secure protocol to access these network devices using the same interface. Which of the following protocols should be implemented?",
    answer: "B. The newest fully supported version of TLS",
    explanation:
      "The newest version of Transport Layer Security (TLS) should be implemented to access the network devices. Because the scenario says the same interface is needed, the only possible choices are TLS or Secure Sockets Layer (SSL). However, SSL has been deprecated and should not be used. Lightweight Directory Access Protocol Secure (LDAPS) is used to communicate with directories such as Microsoft Active Directory. Simple Network Management Protocol version 3 (SNMPv3) adds security to SNMP and encrypts the credentials sent to and from the network devices, but it doesn't support access via a browser interface.",
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
    explanation:
      "You can use Secure Shell (SSH) to encrypt confidential data when transmitting it over the network. Secure File Transfer Protocol(SFTP) uses SSH to encrypt File Transfer Protocol (FTP) traffic, but FTP is unencrypted. Simple Network Management Protocol version 3 (SNMPv3) is used to monitor and manage network devices, not transmit data over a network. Secure Real-Time Transport Protocol (SRTP) provides encryption, message authentication, and integrity for voice and video, but not all data.",
    options: ["A. FTP", "B. SSH", "C. SNMPv3", "D. SRTP"],
  },
  {
    numb: 3,
    question:
      "Maggie needs to collect network device configuration information and network statistics from devices on the network. She wants to protect the confidentiality of credentials used to connect to these devices. Which of the following protocols would BEST meet this need?",
    answer: "C. SNMPv3",
    explanation:
      "Simple Network Management Protocol version 3 (SNMPv3) is a secure protocol that can monitor and collect information from network devices. It includes strong authentication mechanisms to protect the confidentiality of credentials. None of the other protocols listed are used to monitor network devices. Secure Shell (SSH) provides a secure method of connecting to devices but does not monitor them. File Transfer Protocol Secure (FTPS) is useful for encrypting large files in transit, using Transport Layer Security (TLS). TLS is commonly used to secure transmissions but doesn't include methods to monitor devices.",
    options: ["A. SSH", "B. FTPS", "C. SNMPv3", "D. TLS"],
  },
  {
    numb: 4,
    question:
      "You are trying to determine what information attackers can gain about your organization using network reconnaissance methods via the Internet. Using a public wireless hot spot, you issue the following command: nslookup -querytype=mx gcgapremium.com You then see the following results. What does this tell you?",
    answer: "C. The mx1.emailsrvr.com is a backup mail server",
    explanation:
      "This indicates that the mx1.emailsrvr.com is a backup mail server. The preference of mx1.emailsrvr.com is 90, which is higher than the preference of 20 for mx2.emailsrvr.com. In other words, mx2.emailsrvr.com is the primary email server and mx1.emailsrvr.com is the secondary email server. The “Address: 10.0.0.1” response indicates that the address of the Domain Name System (DNS) server that gave the response is 10.0.0.1. The “Server: UnKnown” response indicates that the DNS server is not using PTR records, which resolve IP addresses to host names. Note that “UnKnown” looks like a typo but is the way that nslookup (short for nameserver lookup) displays it. The MX records are required so that other Internet-based mail servers can find the mail servers handling mail sent to a domain",
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
      "Administrators are configuring a server within your organization's screened subnet. This server will have the following capabilities when it is fully configured: (1) It will use RRSIG. (2) It will perform authenticated requests for A records. (3) It will perform authenticated requests for AAAA records. What BEST identifies the capabilities of this server?",
    answer: "D. DNSSEC",
    explanation:
      "This is a Domain Name System (DNS) server with the added capabilities of DNS Security Extensions (DNSSEC). DNSSEC is a suite of extensions to DNS. It uses a Resource Record Signature (RRSIG), commonly referred to as a digital signature, to provide data integrity and authentication for DNS replies. A DNS server resolves hostnames to IP addresses. Secure Shell (SSH) is commonly used to connect to remote systems and can be used to send files in an encrypted format over a network. Simple Network Management Protocol version 3 (SNMPv3) isused to manage and monitor network devices. Secure/Multipurpose Internet Mail Extensions(S/MIME) is a popular standard used to encrypt email, but email is not mentioned in the scenario.",
    options: ["A. SSH", "B. SNMPv3", "C. S/MIME", "D. DNSSEC"],
  },
  {
    numb: 6,
    question:
      "Maggie regularly connects to a remote server named gcga using Secure Shell (ssh) from her Linux system. However, she has trouble remembering the password, and she wants to avoid using it without sacrificing security. She creates a cryptographic key pair to use instead. Which of the following commands is the BEST choice to use after creating the key pair?",
    answer: "A. ssh-copy-id -i ~.ssh/id_rsa.pub maggie@gcga",
    explanation:
      "After creating the key pair, she should use the ssh-copy-id command to copy the public key to the server. The first step uses the ssh-keygen -t rsa command. This creates an RSA-based key pair (a private keyand a public key). The public key's location and the name is ~.ssh/id_rsa.pub, and the private key's location and the name is ~/.ssh/id_rsa. The second step is to copy the public key to the remote server using the command ssh-copy-id -i ~ .ssh/id_rsa.pub maggie@gcga. The private key should always stay private, but the chmod 644 command makes it readable by everyone, so it shouldn't be used. The ssh command connects to the remote server using Secure Shell (ssh). However, it's not required to connect to the server before copying it. The ssh-copy-id command is a utility within the OpenSSH suite of tools.",
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
    explanation:
      "The Network Time Protocol (NTP) provides time synchronization services, so enabling NTP on servers in the screened subnet (sometimes called a demilitarized zone or DMZ) would meet this use case. The Secure Real-time Transport Protocol (SRTP) provides encryption, message authentication, and integrity for audio and video over IP networks. Protocols such as Simple Mail Transfer Protocol (SMTP), Post OfficeProtocol v3 (POP3), and Internet Message Access Protocol version 4 (IMAP4) are used for email. Encrypting data isn't relevant to time synchronization services provided by NTP.",
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
    explanation:
      "You can prevent unauthorized access by disabling unused physical ports on the switches as an overall port security practice. This prevents the connection if someone plugs their computer into an unused disabled port. Spanning Tree Protocol (STP) prevents switching loop problems and should be enabled. Secure Shell (SSH) encrypts traffic and can be used to connect to network devices for management, but it doesn't directly protect a switch. Dynamic Host Configuration Protocol (DHCP) isused to dynamically issue IP addresses and is unrelated to this scenario.",
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
    explanation:
      "Secure Shell (SSH) can be used to connect to many network devices and is the best answer of the given choices. It encrypts the entire session, including the credentials. The scenario indicates that administrators are likely using Simple Network Management Protocol v1 (SNMPv1), SNMPv2, or SNMPv2c. These protocols all send a community string over the network in cleartext. SNMPv3 (which isn't available as a possible answer) encrypts the credentials before sending them over the network. Secure Sockets Layer (SSL) has been deprecated and shouldn't be used. Secure File Transfer Protocol (SFTP) is a secure implementation of FTP and is used to transfer files, not manage network devices.",
    options: ["A. Use SNMPv2c", "B. Use SSH", "C. Use SSL", "D. Use SFTP."],
  },
  {
    numb: 10,
    question:
      "Which of the following devices would MOST likely have the following entries used to define its operation? (1) permit IP any any eq 80 (2) permit IP any any eq 4433 (3) deny IP any any",
    answer: "A. Firewall",
    explanation:
      "These are rules in an access control list (ACL) within a firewall. The first two rules indicate that traffic from any IP address, to any IP address, using ports 80 or 443 is permitted or allowed. The final rule is also known as an implicit deny rule and is placed last in the ACL. It ensures that all traffic that hasn't been previously allowed is denied. A proxy server would not use an ACL, although it would use ports 80 and 443 for Hypertext Transfer Protocol (HTTP) and HTTP Secure (HTTPS), respectively. A web server wouldn't use an ACL, although it would also use ports 80 and 443. A jump server is a server placed between different security zones (such as an internal network and a screened subnet) and isused to manage devices in the other security zone.",
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
    explanation:
      "The Hypertext Transfer Protocol (HTTP) rule should be changed from Allow to Block to block clear text web traffic. The Telnet rule has the incorrect Destination address and the incorrect action. It should be 10.0.1.0/24 and set to Block because it is not a secure protocol for remote management. However, because it has the incorrect address (10.0.3.0/24), it won't have any effect on traffic to Firewall 1.",
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
    explanation:
      "The best choice of the available answers is to air gap the computers. An air gap provides physical isolation, indicating that there is a gap of air between an isolated system and other systems. A screened subnet (sometimes called a demilitarized zone or DMZ) provides a buffer between the Internet and an internal network and would connect these computers to both the internal network and the Internet. The scenario doesn't indicate the computers need to be connected, so a separate isolated network is not needed. Placing the computers within a virtual local area network (VLAN) would connect the computers to a network.",
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
      "You have added another router in your network. This router provides a path to a limited access network that isn't advertised. However, a network administrator needs to access this network regularly. Which of the following could he do to configure his computer to access this limited network?",
    answer: "C. Use the route command",
    explanation:
      "The route command can be used to display and manipulate the routing table on a Linux computer. Using this, you can provide another gateway path through this router to the limited access network. None of the other choices can add routing paths. Quality of Service (QoS) technologies allow administrators to give priority of some network traffic over other network traffic. A virtual local area network (VLAN) is used to segment or isolate a network, so configuring one won't grant access to a network. A router doesn't have ports that can be opened for individual users.",
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
    explanation:
      "A stateful firewall filters traffic based on the state of the packet within a session. It would filter a packet that isn't part of an established Transmission Control Protocol (TCP) session, which starts with a TCP three-way handshake. A stateless firewall filters traffic based on the IP address, port, or protocol ID. While it's appropriate to place a network firewall in a screened subnet (sometimes called a demilitarized zone or DMZ), a network firewall could be either a stateless firewall or a stateful firewall. A web application firewall (WAF) is specifically designed to protect a web application, commonly hosted on a web server, but the attack was on several servers, not just a web server.",
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
      "Your network currently has a dedicated firewall protecting access to a web server. It is currently configured with only the following two rules in the ACL: (1) PERMIT TCP ANY ANY 443 (2) PERMIT TCP ANY ANY 80. You have detected DNS requests and DNS zone transfer requests coming through the firewall and you need to block them. Which of the following would meet this goal? (Select TWO. Each answer is a full solution.)",
    answer: [
      "D. Add the following rule to the firewall: DENY TCP ALL ALL 53",
      "E. Add an implicit deny rule at the end of the ACL",
    ],
    explanation:
      "The easiest way is to add an implicit deny rule at the end of the access control list (ACL) and all firewalls should have this to block all unwanted traffic. You can also deny all IP traffic using port 53 with DENY IP ALL ALL 53. Domain Name System (DNS) requests use UDP port 53, and DNS zone transfers use TCP port 53, so blocking only TCP 53 or UDP 53 does not block all DNS traffic. Port 25 is for Simple Mail Transfer Protocol (SMTP) and unrelated to this question.",
    options: [
      "A. Add the following rule to the firewall: DENY TCP ALL ALL 53",
      "B. Add the following rule to the firewall: DENY UDP ALL ALL 53",
      "C. Add the following rule to the firewall: DENY TCP ALL ALL 25",
      "D. Add the following rule to the firewall: DENY IP ALL ALL 53",
      "E. Add an implicit deny rule at the end of the ACL",
    ],
    numAnswersToSelect: 2,
  },
];
