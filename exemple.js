// Créer le header


// CREATION D'UN UN LI DE HEADER
let headerLi = (text) =>
    li().mg("0 10px").addChild(
        a().href("#").text(text).cl("#fff").css("textDecoration", "none").pd("5px 10px").br("5px"))

// CREATION DU HEADER
let head = header().bg("#333").cl("#fff").pd("10px 0")
    .addChild(
        nav().aClass("navbar").d("flex").jc("space-between").ai("center").css("maxWidth", "1200px").mg("0 auto").pd("0 20px")
            .addChild(
                div().text("MySite").fs("1.5em").fw("bold"),
                ul().aClass("nav-list").d("flex").css("list-style", "none")
                    .addChild(
                        headerLi("Home").br("2px"),
                        headerLi("About"),
                        headerLi("Services"),
                        headerLi("Contact")
                    )
            )
    );

// CREATION D'UNE CARTE
let card = (child) => div().bg("#f4f4f4").bo("1px solid #ddd").br("5px").pd("20px").w("300px").ta('center').bs("0 0 10px rgba(0, 0, 0, 0.1)").cursor("pointer").addChild(child)

// CREATION D'UN TITRE DE CARTE
let sectionTitle = (text) => h2().mg("15px").fs("1.25em").text(text);

// CREATION D'UN P DE CARTE
let sectionP = (text) => p().mgb("15px").text(text);

// CREATION D'UN A DE CARTE
let sectionA = () => a().href("#").cl("#333").td("none").pd("10px 15px").bo("1px solid #333").br("5px").text("Learn More");

// CREATION DU CONTENEUR DE CARTES
let cardsSection = section().d("flex").jc("center").gap("20px").fw("wrap").mg("0 auto").pd("0 20px").css("maxWidth", "400px")
    .addChild(
        card(
            sectionTitle("Card 1"),
            sectionP("This is some sample content for card 1."),
            sectionA()
        ),
        card(
            sectionTitle("Card 2"),
            sectionP("This is some sample content for card 2."),
            sectionA()
        ),
        card(
            sectionTitle("Card 3"),
            sectionP("This is some sample content for card 3."),
            sectionA()
        )
    );

// CREATION DU MAIN
let mainContent = main().css("flex", "1").pd("20px 0").addChild(
    cardsSection,
    ul().aClass("features").d("flex").css("flexDirection", "column")
        .css("flexWrap", "wrap").pd("20px")
        .addChild(
            div().d("flex").css("flexDirection", "row").css("justifyContent", "center").addChild(
                li().text("Flexibilité").bg("#ffadad").mg("10px").pd("10px").br("5px").fs("10px").flexCenter().cursor("pointer").rotateOnHover("Y"),
                li().text("Modularité").bg("#ffd6a5").mg("10px").pd("10px").br("5px").fs("15px").flexCenter().cursor("pointer").rotateOnHover("X"),
                li().text("Dynamisme").bg("#fdffb6").mg("10px").pd("10px").br("5px").fs("20px").flexCenter().cursor("pointer").rotateOnHover("Z")),
            div().d("flex").fd("row").fw("wrap").jc("center").addChild(
                li().text("ClickMe").mg("10px").pd("10px").br("5px").fs("40px").flexCenter().cs("pointer").bo("solid 2px")
                    .toggle(
                        [["color", "black"], ["background", "white"]],
                        [["color", "white"], ["background", "black"]],)
            ),
        ),);

// CREATION DU FORMULAIRE => On est en GET, on peut ajouter l'attribut 
let loginForm = form().attr("method", "post")
    .d("flex").fd("column").w("300px").mg("50px auto").pd("20px").bo("1px solid #ddd").br("5px").bs("0 0 10px rgba(0, 0, 0, 0.1)")
    .addChild(
        h2().text("Connexion").fs("1.5em").mgb("20px").ta("center"),
        div().mg("10px 0").addChild(
            label().for("username").text("Nom d'utilisateur").d("block").mgb("5px"),
            input().type("text").id("username").name("username").w("100%").pd("10px").br("5px").bo("1px solid #ddd")),
        div().mg("10px 0").addChild(
            label().for("password").text("Mot de passe").d("block").mgb("5px"),
            input().type("password").id("password").name("password").w("100%").pd("10px").br("5px").bo("1px solid #ddd")),
        div().mg("20px 0").addChild(
            button().type("submit").text("Connexion").w("100%").pd("10px").bg("#007bff").cl("#fff").br("5px").cursor("pointer").bo("none"))
    );



// CREATION DU FOOTER
let footerElement = footer().bg("#333").cl("#fff").ta("center").pd("10px 0").addChild(
    p().html("&copy; 2024 MySite. All rights reserved."));


// INJECTION DANS LE BODY
document.body.appendChild(head.build());
document.body.appendChild(mainContent.build());
document.body.appendChild(loginForm.build());
document.body.appendChild(footerElement.build());
