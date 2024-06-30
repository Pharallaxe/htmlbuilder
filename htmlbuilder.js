/**  UTILITAIRES POUR CREATION DE HTML
 **************************************/

// Fonction pour créer une balise html.
function el(nom_balise) {
    let newel = new HTMLBuilder();
    newel.balise(nom_balise);
    return newel;
}


// Classe pour créer une tag html.
class HTMLBuilder {
    constructor(className = "") {
        this.className = className;
        this.el;

        const attributes = [
            'alt', 'href', 'id', 'max', 'min', 'name', 'src',
            'tole', 'step', 'title', 'type', 'value', 'for',
            'target', 'placeholder'
        ];

        // Créer une fonction pour chaque propriété ci dessus en
        // version 

        for (const attribut of attributes) {
            this[attribut] = (value) => this.attr(attribut, value);
        }

        const proprerties = {
            alignItems: 'ai',
            background: 'bg',
            borderRadius: 'br',
            bottom: 'b',
            border: 'bo',
            boxShadow: 'bs',
            color: 'cl',
            cursor: "cs",
            display: 'd',
            flexDirection: 'fd',
            flexWrap: 'fw',
            fontSize: 'fs',
            fontWeight: 'fw',
            gap: 'gap',
            height: 'h',
            justifyContent: 'jc',
            left: 'left',
            margin: 'mg',
            marginBottom: 'mgb',
            marginLeft: 'mgl',
            marginRight: 'mgr',
            marginTop: 'mgt',
            order: 'o',
            padding: 'pd',
            paddingBottom: 'pdb',
            paddingLeft: 'pdl',
            paddingRight: 'pdr',
            paddingTop: 'pdt',
            position: 'pos',
            right: 'right',
            textAlign: 'ta',
            textDecoration: 'td',
            top: 't',
            transition: "tr",
            width: 'w',
        };

        // Créer une fonction pour chaque propriété ci dessus en
        // version 

        for (const [property, abbr] of Object.entries(proprerties)) {
            this[abbr] = (value) => this.css(property, value);
            this[property] = this[abbr]; // Équivalent de l'abbréviation
        }
    }

    balise(nom_balise) {
        this.el = document.createElement(nom_balise);
        return this.el;
    }

    attr(attribut, value) {
        this.el.setAttribute(attribut, value);
        return this;
    }

    r_attr(attribut) {
        this.el.removeAttribute(attribut);
        return this;
    }

    css(property, value) {
        this.el.style[property] = value;
        return this;
    }

    aClass(noms_classe) {
        for (const className of noms_classe.split(" "))
            this.el.classList.add(className.trim());
        return this;
    }

    rClass(noms_classe) {
        for (const className of noms_classe.split(" "))
            this.el.classList.remove(className.trim());
        return this;
    }

    tClass(noms_classe) {
        for (const className of noms_classe.split(" "))
            this.el.classList.toggle(className.trim());
        return this;
    }

    id(nom_id) {
        this.idName = nom_id;
        return this;
    }

    html(text) {
        this.el.innerHTML = text;
        return this;
    }

    on(eventType, handler) {
        this.el.addEventListener(eventType, handler.bind(this));
        return this;
    }

    toggle(cssOff, cssOn) {
        let test = false;
        this.el.addEventListener("click", () => {
            if (test) cssOff.forEach(eachCss => {
                this.css(eachCss[0], eachCss[1]);
            })
            else cssOn.forEach(eachCss => {
                this.css(eachCss[0], eachCss[1]);
            })
            test = !test;
        })
        return this;
    }

    text(text) {
        this.el.textContent = text;
        return this;
    }

    addChild(...args) {
        for (const el of args)
            this.el.appendChild(el.build());
        return this;
    }

    build() {
        if (this.className)
            this.el.classList.add(this.className);
        return this.el;
    }

    flexCenter() {
        this.css('display', 'flex');
        this.css('justifyContent', 'center');
        this.css('alignItems', 'center');
        return this;
    }

    rotateOnHover(axe, degrees = 180) {
        this.css('transition', 'transform 0.5s ease-in-out');
        this.on('mouseover', () => this.css('transform', `rotate${axe}(${degrees}deg)`));
        this.on('mouseout', () => this.css('transform', `rotate${axe}(0deg)`));
        return this;
    }
}

function div() {
    return creer("div")
}


// Tableau des balises HTML que vous souhaitez prendre en charge
const balises = [
    "a", "abbr", "address", "article", "aside", "b", "blockquote",
    "body", "button", "cite", "code", "dd", "del", "dfn", "div",
    "dl", "dt", "em", "figcaption", "figure", "footer", "form",
    "h1", "h2", "h3", "h4", "h5", "h6", "header", "i", "img",
    "input", "ins", "kbd", "label", "li", "main", "mark", "nav", "ol", "p",
    "pre", "q", "s", "samp", "section", "select", "small", "span",
    "strong", "sub", "sup", "textarea", "time", "u", "ul", "var"
];


// Création dynamique des fonctions pour chaque balise HTML
const fonctionsBalises = {};
for (const balise of balises) {
    fonctionsBalises[balise] = function (className = "") {
        return el(balise, className);
    };
}

// Déballage des fonctions dans l'espace global (si nécessaire)
for (const [nom, fonction] of Object.entries(fonctionsBalises)) {
    window[nom] = fonction;
}
