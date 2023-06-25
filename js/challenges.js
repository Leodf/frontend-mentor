import ChallengesData from "./data.js";

function newElement(tagName, className, value) {
  const elem = document.createElement(tagName);
  elem.className = className;
  if (value) {
    elem.innerHTML = value;
  }
  return elem;
}

function addImage(imageUrl, title) {
  const img = newElement("img", "challenges-img");
  img.setAttribute("src", imageUrl);
  img.setAttribute("alt", title);
  return img;
}

function addLink(link) {
  const linkElem = newElement("a", "challenges-button", "See more");
  linkElem.setAttribute("href", link);
  linkElem.setAttribute("rel", "noreferrer");
  linkElem.setAttribute("target", "_blank");
  return linkElem;
}

function insertChallenge() {
  const items = ChallengesData;
  const challengeContainer = newElement(
    "div",
    "challenges-container container grid"
  );
  items.forEach(({ id, imageUrl, title, link }) => {
    const imageElem = addImage(imageUrl, title);
    const titleElem = newElement("h3", "challenges-title", `${title}`);
    const linkElem = addLink(link)
    const challengeCard = newElement("div", "challenges-card");
    challengeCard.appendChild(imageElem);
    challengeCard.appendChild(titleElem);
    challengeCard.appendChild(linkElem);
    challengeContainer.appendChild(challengeCard);
  });
  return challengeContainer;
}

function main() {
  const challenges = document.getElementById("challenges");
  const title = newElement("h2", "section-title", "Challenges");
  const subtitle = newElement("span", "section-subtitle", "By Leonardo");
  const dataChallenges = insertChallenge();
  challenges.appendChild(title);
  challenges.appendChild(subtitle);
  challenges.appendChild(dataChallenges);
}
main();
