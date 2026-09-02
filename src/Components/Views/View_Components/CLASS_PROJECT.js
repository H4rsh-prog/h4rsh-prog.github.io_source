export default class CLASS_PROJECT {
    constructor(name, repository) {
        this.name = name;
        this.repository = repository;
    }
}

export var Project_List = [
    new CLASS_PROJECT(
        "CyberSAKura",
        // "CyberSAKura is a modular Swiss Army knife platform for encryption, encoding, hashing, steganography and more — all in one lightweight, extensible toolkit.",
        // ["API-GATEWAY", "CYBERSECURITY-TOOLS", "MICROSERVICE-ARCHITECTURE", "MODULARIZATION", "SPRING-BOOT", "SPRING-CLOUD", "SPRING-SECURITY"],
        "cyberSAKura"
    ),
    new CLASS_PROJECT(
        "LZ77 Compression Service",
        "LZ_CompressionAlgo"
    ),
    new CLASS_PROJECT(
        "Marigold",
        "Marigold"
    ),
    new CLASS_PROJECT(
        "Face Recognition Service",
        "face-recognition-service"
    ),
    new CLASS_PROJECT(
        "Interpretor",
        "Interpretor"
    ),
    new CLASS_PROJECT(
        "LinkedIn Content Automation Service",
        "LinkedIn_ContentAutomation"
    ),
    new CLASS_PROJECT(
        "Image LSB Steganography Service",
        "STEGANOGRAPHER_IMG_LSB"
    ),
];


export function generateGithubCardURL(repository) {
    return `https://githubcard.com/H4rsh-prog/${repository}.svg?d=gJuExwGYmljL`;
}

export function generateGithubCardURLZoomed(repository) {
    return `https://githubcard.com/H4rsh-prog/${repository}.svg?d=yuQfj-RpHQhT`;
}
