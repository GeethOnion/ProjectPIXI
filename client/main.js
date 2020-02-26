function init() {
  let app;

  app = new PIXI.Application({
    width: 2000,
    height: 6000,
    backgroundColor: 0xff0000,
  });

  document.getElementById("canvas-container").appendChild(app.view);

  //preload assets
  app.loader.baseUrl = "resources";
  app.loader
    //vision screen
    .add("vision", "vision/Vision.svg")
    .add("visionFrame", "vision/vision-frame.svg")
    .add("sharejoy", "vision/sharejoy.svg")
    .add("visionHero", "vision/heroo.png")
    .add("visionText", "vision/text.svg")
    .add("getUpdatesButton", "vision/getUpdatesButton.png")
    //solution screen
    .add("solution", "solution/Solution.svg")
    .add("solutionFrame", "solution/solution-frame.svg")
    .add("solutionCards", "solution/cards.png")
    .add("playerActive", "solution/playerActive.svg")
    .add("makerActive", "solution/makerActive.svg")
    .add("requestAccess", "solution/requestAccess.png")
    .add("builderCard", "solution/builderCard.png")
    //story
    .add("story", "story/Story.svg")
    .add("storyFrame", "story/story-frame.svg")
    .add("earlyDaysCard", "story/earlyDays.png")
    //milestones
    .add("milestones", "milestones/Milestones.svg")
    .add("milestonesFrame", "milestones/milestones-frame.svg")
    .add("mapGroup", "milestones/map group.png")
    //joinus
    .add("joinUs", "joinus/Join Us.svg")
    .add("alphaAccess", "joinus/alphaAccess.png")
    .add("crowdfund", "joinus/crowdfund.png")
    .add("development", "joinus/development.png")
    .add("newsletter", "joinus/newsletter.png")
    .add("partner", "joinus/partnerwithus.png")
    .add("investor", "joinus/investor.png")
    .add("joinUsFrame", "joinus/joinus-frame.svg");
  app.loader.load();

  //loader onComplete
  app.loader.onComplete.add(function(e) {
    console.log(app.loader.resources);

    //Tab Icons -------------------------------
    renderTabs(app);
    renderTabContent(app);
    renderScreen(app, "vision");
  });
}
