//Déclaration de variables
let nomDePage = 'Accueil'
window.onload = init
let pageActuelle = 0

function init() {

    structureNavBar()
    attributeValue()
    structureHeader()
    structureMain()
    mainAccueil()
    clickOnButtonNavBar1()


    footer()




}

function structureNavBar() {
    // 1. Créer la div parente
    const container = document.createElement("div");
    container.id = "divParentNavBar";
    container.className = "d-flex justify-content-around border-dark border border-2 rounded-3 pt-2 pb-2 ms-4 me-4 bg-light rounded-3";
    container.style = "--bs-bg-opacity: .5;"


    // 2. Créer 5 div enfants + boutons
    for (let i = 1; i <= 5; i++) {
        // Créer une div enfant
        const childDiv = document.createElement("div");
        childDiv.id = `divEnfant${i}`;


        // Créer un bouton
        const button = document.createElement("button");
        button.id = `buttonNavBar${i}`;
        button.className = 'btn btn-success btnNavBar'

        // Ajouter le bouton à la div enfant
        childDiv.appendChild(button);

        // Ajouter la div enfant au conteneur principal
        container.appendChild(childDiv);
    }

    // 3. Ajouter le tout à la page
    document.querySelector('header').appendChild(container);

    //4.Attribue un nom à chaques boutons
    const btnnNavBar1 = document.getElementById('buttonNavBar1')
    btnnNavBar1.textContent = 'Accueil'
    btnnNavBar1.id = 'btnAccueil'
    const btnnNavBar2 = document.getElementById('buttonNavBar2')
    btnnNavBar2.textContent = 'Inscription'
    btnnNavBar2.id = 'btnInscription'
    const btnnNavBar3 = document.getElementById('buttonNavBar3')
    btnnNavBar3.textContent = 'Connexion'
    btnnNavBar3.id = 'btnConnexion'
    const btnnNavBar4 = document.getElementById('buttonNavBar4')
    btnnNavBar4.textContent = 'Profil'
    btnnNavBar4.id = 'btnProfil'
    const btnnNavBar5 = document.getElementById('buttonNavBar5')
    btnnNavBar5.textContent = 'Jouer'
    btnnNavBar5.id = 'btnJouer'

}

function attributeValue() {


    document.querySelector('footer').className = 'bg-light border border-dark border-2 rounded-3'
    document.querySelector('footer').style = "--bs-bg-opacity: .5;"
}

function structureHeader() {
    const container = document.createElement("div");
    container.id = "divTitleHeader";
    container.className = "d-flex justify-content-center pt-3 pb-3";

    const createH1TitrePage = document.createElement("h1")
    createH1TitrePage.id = 'h1TitleHeader'
    createH1TitrePage.textContent = `ENI - MEMORY - ${nomDePage}`


    container.appendChild(createH1TitrePage)
    document.querySelector('header').prepend(container);
    const h1TitrePage = document.getElementById('h1TitleHeader')
    h1TitrePage.innerHTML = h1TitrePage.innerHTML.replace(
        'MEMORY',
        '<strong>MEMORY</strong>'
    )
}

function structureMain() {
    const container = document.createElement("div");
    container.id = "divMainContent";
    container.className = "d-flex flex-column justify-content-center mt-6 ms-6 me-6 mb-6 bg-light border border-dark border-2 rounded-3";
    container.style = "--bs-bg-opacity: .5;"

    const temponDivMainToDivMain = document.createElement("div");
    temponDivMainToDivMain.id = "DivMainToDivMain";
    temponDivMainToDivMain.className = "";

    const containerTitleDivMainContent = document.createElement("div");
    containerTitleDivMainContent.id = "TitleDivMainContent";
    containerTitleDivMainContent.className = "d-flex justify-content-center mb-4";

    const containerContentDivMainContent = document.createElement("div");
    containerContentDivMainContent.id = "ContentDivMainContent";
    containerContentDivMainContent.className = "";

    const createH2MainContent = document.createElement('h2')
    createH2MainContent.id = 'H2MainContent'


    containerTitleDivMainContent.appendChild(createH2MainContent)
    temponDivMainToDivMain.appendChild(containerTitleDivMainContent)
    temponDivMainToDivMain.appendChild(containerContentDivMainContent)
    container.appendChild(temponDivMainToDivMain)

    document.querySelector('main').appendChild(container);
}

function mainAccueil() {


    // Modifie le titre dans le main
    document.getElementById('H2MainContent').textContent = "Bienvenue sur mon projet de Memory";

    // Création d'une div qui contiendra un span
    const containerDivMainContent = document.createElement("div");
    containerDivMainContent.id = "spanDivMainContent";
    containerDivMainContent.className = "ps-2 mb-2";

    const createSpanMainContent = document.createElement('span');
    createSpanMainContent.textContent = 'Venez jouer avec nous et faites le meilleur score possible';

    // Création d'une liste de règles
    const containerDivListeRegles = document.createElement('div');
    containerDivListeRegles.id = "divListeRegles";
    containerDivListeRegles.className = "ps-2 mb-2 mt-2";

    const createListeRegles = document.createElement('ul');
    createListeRegles.id = "listeRegles";
    createListeRegles.className = "a remplir";

    // Création du titre de la liste (HEAD n'est pas approprié ici)
    const createTitreListeRegles = document.createElement('h3');  // Changé de 'head' à 'h3'
    createTitreListeRegles.id = "titreListeRegles";
    createTitreListeRegles.className = "a remplir";
    createTitreListeRegles.textContent = 'Règles du jeu :';

    // Ajout du titre avant la liste
    containerDivListeRegles.appendChild(createTitreListeRegles);

    // Création des éléments de liste
    const regles = [
        "Retourner deux cartes. Si les images sont identiques le jeu laisse les cartes visibles.",
        "Si les images sont différentes, les cartes se retournent faces cachées là où elles étaient.",
        "La partie est terminée lorsque toutes les cartes ont été assemblées par paires"
    ];

    for (let index = 0; index < regles.length; index++) {
        const createListes = document.createElement('li');
        createListes.id = `liste${index}`;
        createListes.className = "a remplir";
        createListes.textContent = regles[index];  // Ajout du texte directement ici
        createListeRegles.appendChild(createListes);
    }

    const containerDivImageExempleMain = document.createElement('div');
    containerDivImageExempleMain.id = "DivImageExempleMain";
    containerDivImageExempleMain.className = "d-flex justify-content-center mt-3 mb-3";
    const createImageExempleMain = document.createElement('img')
    createImageExempleMain.id = 'ImageExempleMain'
    createImageExempleMain.className = 'img-fluid img-thumbnail imgExemple'
    createImageExempleMain.src = 'images/memory_exemple.jpg'

    const containerDivSpanEndMain = document.createElement('div');
    containerDivSpanEndMain.id = "DivSpanEndMain";
    containerDivSpanEndMain.className = "d-flex flex-column";

    const createSpanMainContent1 = document.createElement('span');
    createSpanMainContent1.id = 'spanMainContent1'
    createSpanMainContent1.textContent = 'Si vous voulez vous souvenir de votre score. Inscrivez-vous via le formulaire.';

    const createSpanMainContent2 = document.createElement('span');
    createSpanMainContent2.id = 'spanMainContent2'
    createSpanMainContent2.textContent = 'Le jeu garde les 5 meilleurs scores.';

    const createSpanMainContent3 = document.createElement('span');
    createSpanMainContent3.id = 'spanMainContent3'
    createSpanMainContent3.textContent = 'Si vous voulez relancer une partie cliquez sur la barre espace .';

    containerDivImageExempleMain.appendChild(createImageExempleMain)
    containerDivListeRegles.appendChild(createListeRegles);
    containerDivMainContent.appendChild(createSpanMainContent);
    containerDivMainContent.appendChild(containerDivListeRegles);
    containerDivMainContent.appendChild(containerDivImageExempleMain);
    containerDivMainContent.appendChild(containerDivSpanEndMain);
    containerDivSpanEndMain.appendChild(createSpanMainContent1);
    containerDivSpanEndMain.appendChild(createSpanMainContent2);
    containerDivSpanEndMain.appendChild(createSpanMainContent3);

    document.getElementById('ContentDivMainContent').appendChild(containerDivMainContent);

    const replaceSpanMainContent2 = document.getElementById('spanMainContent2')
    replaceSpanMainContent2.innerHTML = replaceSpanMainContent2.innerHTML.replace(
        '5 meilleurs',
        '<strong>5 meilleurs</strong>'
    )

    const replaceSpanMainContent3 = document.getElementById('spanMainContent3')
    replaceSpanMainContent3.innerHTML = replaceSpanMainContent3.innerHTML.replace(
        'la barre espace',
        '<strong>la barre espace</strong>'
    )
}

function footer() {
    const containerDivMainFooter = document.createElement("div");
    containerDivMainFooter.id = "divMainFooter";
    containerDivMainFooter.className = "d-flex justify-content-center mt-2 mb-2";

    const containerDivLeftFooter = document.createElement("div");
    containerDivLeftFooter.id = "divLeftFooter";
    containerDivLeftFooter.className = "a remplir";

    const containerDivCenterFooter = document.createElement("div");
    containerDivCenterFooter.id = "divCenterFooter";
    containerDivCenterFooter.className = "a remplir";

    const containerDivRightFooter = document.createElement("div");
    containerDivRightFooter.id = "divRightFooter";
    containerDivRightFooter.className = "";

    const containerH5CenterFooter = document.createElement("h5");
    containerH5CenterFooter.id = "H5CenterFooter";
    containerH5CenterFooter.className = "a remplir";
    containerH5CenterFooter.textContent = 'COPYRIGHT'


    containerDivCenterFooter.appendChild(containerH5CenterFooter)
    containerDivMainFooter.appendChild(containerDivLeftFooter)
    containerDivMainFooter.appendChild(containerDivCenterFooter)
    containerDivMainFooter.appendChild(containerDivRightFooter)
    document.querySelector('footer').appendChild(containerDivMainFooter);
}

function clickOnButtonNavBar1() {
    // Récupération des boutons
    const btnAccueil = document.getElementById('btnAccueil');
    const btnInscription = document.getElementById('btnInscription');
    const btnConnexion = document.getElementById('btnConnexion');
    const btnProfil = document.getElementById('btnProfil');
    const btnJouer = document.getElementById('btnJouer');

    // Définition de TOUS les handlers comme fonctions nommées
    function handleAccueil() {
        document.getElementById('spanDivMainContent').remove()
        mainAccueil();
    }
    function handleInscription() {
        document.getElementById('spanDivMainContent').remove()
        mainInscription();
    }
    function handleConnexion() {
        document.getElementById('spanDivMainContent').remove()
        mainConnexion()
    }
    function handleProfil() {
        document.getElementById('spanDivMainContent').remove()
        mainProfil()
    }
    function handleJouer() {
        document.getElementById('spanDivMainContent').remove()
        mainJouer()
    }

    // D'abord supprimer TOUS les écouteurs
    btnAccueil.removeEventListener('click', handleAccueil);
    btnInscription.removeEventListener('click', handleInscription);
    btnConnexion.removeEventListener('click', handleConnexion);
    btnProfil.removeEventListener('click', handleProfil);
    btnJouer.removeEventListener('click', handleJouer);

    // Puis ajouter les écouteurs
    btnAccueil.addEventListener('click', handleAccueil);
    btnInscription.addEventListener('click', handleInscription);
    btnConnexion.addEventListener('click', handleConnexion);
    btnProfil.addEventListener('click', handleProfil);
    btnJouer.addEventListener('click', handleJouer);
}

function mainInscription() {



    // Modifie le titre dans le main
    document.getElementById('H2MainContent').textContent = "Inscrivez-vous";

    // Création d'une div qui contiendra un span
    const containerSpanDivMainContent = document.createElement("div");
    containerSpanDivMainContent.id = "spanDivMainContent";
    containerSpanDivMainContent.className = "ps-2 mb-2";

    const createSpanMainContent = document.createElement('span');
    createSpanMainContent.textContent = 'Venez jouer avec nous et faites le meilleur score possible';

    // Création d'une liste de règles
    const containerDivListeRegles = document.createElement('div');
    containerDivListeRegles.id = "divListeRegles";
    containerDivListeRegles.className = "ps-2 mb-2 mt-2";

    const createListeRegles = document.createElement('ul');
    createListeRegles.id = "listeRegles";
    createListeRegles.className = "a remplir";

    // Création du titre de la liste (HEAD n'est pas approprié ici)
    const createTitreListeRegles = document.createElement('h3');  // Changé de 'head' à 'h3'
    createTitreListeRegles.id = "titreListeRegles";
    createTitreListeRegles.className = "a remplir";
    createTitreListeRegles.textContent = 'Règles du jeu :';

    // Ajout du titre avant la liste
    containerDivListeRegles.appendChild(createTitreListeRegles);

    // Création des éléments de liste
    const regles = [
        "Retourner deux cartes. Si les images sont identiques le jeu laisse les cartes visibles.",
        "Si les images sont différentes, les cartes se retournent faces cachées là où elles étaient.",
        "La partie est terminée lorsque toutes les cartes ont été assemblées par paires"
    ];

    for (let index = 0; index < regles.length; index++) {
        const createListes = document.createElement('li');
        createListes.id = `liste${index}`;
        createListes.className = "a remplir";
        createListes.textContent = regles[index];  // Ajout du texte directement ici
        createListeRegles.appendChild(createListes);
    }

    const containerDivImageExempleMain = document.createElement('div');
    containerDivImageExempleMain.id = "DivImageExempleMain";
    containerDivImageExempleMain.className = "d-flex justify-content-center mt-3 mb-3";
    const createImageExempleMain = document.createElement('img')
    createImageExempleMain.id = 'ImageExempleMain'
    createImageExempleMain.className = 'img-fluid img-thumbnail imgExemple'
    createImageExempleMain.src = 'images/memory_exemple.jpg'

    const containerDivSpanEndMain = document.createElement('div');
    containerDivSpanEndMain.id = "DivSpanEndMain";
    containerDivSpanEndMain.className = "d-flex flex-column";

    const createSpanMainContent1 = document.createElement('span');
    createSpanMainContent1.id = 'spanMainContent1'
    createSpanMainContent1.textContent = 'Si vous voulez vous souvenir de votre score. Inscrivez-vous via le formulaire.';

    const createSpanMainContent2 = document.createElement('span');
    createSpanMainContent2.id = 'spanMainContent2'
    createSpanMainContent2.textContent = 'Le jeu garde les 5 meilleurs scores.';

    const createSpanMainContent3 = document.createElement('span');
    createSpanMainContent3.id = 'spanMainContent3'
    createSpanMainContent3.textContent = 'Si vous voulez relancer une partie cliquez sur la barre espace .';

    containerDivImageExempleMain.appendChild(createImageExempleMain)
    containerDivListeRegles.appendChild(createListeRegles);
    containerSpanDivMainContent.appendChild(createSpanMainContent);
    containerSpanDivMainContent.appendChild(containerDivListeRegles);
    containerSpanDivMainContent.appendChild(containerDivImageExempleMain);
    containerSpanDivMainContent.appendChild(containerDivSpanEndMain);
    containerDivSpanEndMain.appendChild(createSpanMainContent1);
    containerDivSpanEndMain.appendChild(createSpanMainContent2);
    containerDivSpanEndMain.appendChild(createSpanMainContent3);

    document.getElementById('divMainContent').appendChild(containerSpanDivMainContent);

    const replaceSpanMainContent2 = document.getElementById('spanMainContent2')
    replaceSpanMainContent2.innerHTML = replaceSpanMainContent2.innerHTML.replace(
        '5 meilleurs',
        '<strong>5 meilleurs</strong>'
    )

    const replaceSpanMainContent3 = document.getElementById('spanMainContent3')
    replaceSpanMainContent3.innerHTML = replaceSpanMainContent3.innerHTML.replace(
        'la barre espace',
        '<strong>la barre espace</strong>'
    )

}

function mainConnexion(){



    // Modifie le titre dans le main
    document.getElementById('H2MainContent').textContent = "Connectez-vous";

    // Création d'une div qui contiendra un span
    const containerSpanDivMainContent = document.createElement("div");
    containerSpanDivMainContent.id = "spanDivMainContent";
    containerSpanDivMainContent.className = "ps-2 mb-2";

    const createSpanMainContent = document.createElement('span');
    createSpanMainContent.textContent = 'Venez jouer avec nous et faites le meilleur score possible';

    // Création d'une liste de règles
    const containerDivListeRegles = document.createElement('div');
    containerDivListeRegles.id = "divListeRegles";
    containerDivListeRegles.className = "ps-2 mb-2 mt-2";

    const createListeRegles = document.createElement('ul');
    createListeRegles.id = "listeRegles";
    createListeRegles.className = "a remplir";

    // Création du titre de la liste (HEAD n'est pas approprié ici)
    const createTitreListeRegles = document.createElement('h3');  // Changé de 'head' à 'h3'
    createTitreListeRegles.id = "titreListeRegles";
    createTitreListeRegles.className = "a remplir";
    createTitreListeRegles.textContent = 'Règles du jeu :';

    // Ajout du titre avant la liste
    containerDivListeRegles.appendChild(createTitreListeRegles);

    // Création des éléments de liste
    const regles = [
        "Retourner deux cartes. Si les images sont identiques le jeu laisse les cartes visibles.",
        "Si les images sont différentes, les cartes se retournent faces cachées là où elles étaient.",
        "La partie est terminée lorsque toutes les cartes ont été assemblées par paires"
    ];

    for (let index = 0; index < regles.length; index++) {
        const createListes = document.createElement('li');
        createListes.id = `liste${index}`;
        createListes.className = "a remplir";
        createListes.textContent = regles[index];  // Ajout du texte directement ici
        createListeRegles.appendChild(createListes);
    }

    const containerDivImageExempleMain = document.createElement('div');
    containerDivImageExempleMain.id = "DivImageExempleMain";
    containerDivImageExempleMain.className = "d-flex justify-content-center mt-3 mb-3";
    const createImageExempleMain = document.createElement('img')
    createImageExempleMain.id = 'ImageExempleMain'
    createImageExempleMain.className = 'img-fluid img-thumbnail imgExemple'
    createImageExempleMain.src = 'images/memory_exemple.jpg'

    const containerDivSpanEndMain = document.createElement('div');
    containerDivSpanEndMain.id = "DivSpanEndMain";
    containerDivSpanEndMain.className = "d-flex flex-column";

    const createSpanMainContent1 = document.createElement('span');
    createSpanMainContent1.id = 'spanMainContent1'
    createSpanMainContent1.textContent = 'Si vous voulez vous souvenir de votre score. Inscrivez-vous via le formulaire.';

    const createSpanMainContent2 = document.createElement('span');
    createSpanMainContent2.id = 'spanMainContent2'
    createSpanMainContent2.textContent = 'Le jeu garde les 5 meilleurs scores.';

    const createSpanMainContent3 = document.createElement('span');
    createSpanMainContent3.id = 'spanMainContent3'
    createSpanMainContent3.textContent = 'Si vous voulez relancer une partie cliquez sur la barre espace .';

    containerDivImageExempleMain.appendChild(createImageExempleMain)
    containerDivListeRegles.appendChild(createListeRegles);
    containerSpanDivMainContent.appendChild(createSpanMainContent);
    containerSpanDivMainContent.appendChild(containerDivListeRegles);
    containerSpanDivMainContent.appendChild(containerDivImageExempleMain);
    containerSpanDivMainContent.appendChild(containerDivSpanEndMain);
    containerDivSpanEndMain.appendChild(createSpanMainContent1);
    containerDivSpanEndMain.appendChild(createSpanMainContent2);
    containerDivSpanEndMain.appendChild(createSpanMainContent3);

    document.getElementById('divMainContent').appendChild(containerSpanDivMainContent);

    const replaceSpanMainContent2 = document.getElementById('spanMainContent2')
    replaceSpanMainContent2.innerHTML = replaceSpanMainContent2.innerHTML.replace(
        '5 meilleurs',
        '<strong>5 meilleurs</strong>'
    )

    const replaceSpanMainContent3 = document.getElementById('spanMainContent3')
    replaceSpanMainContent3.innerHTML = replaceSpanMainContent3.innerHTML.replace(
        'la barre espace',
        '<strong>la barre espace</strong>'
    )
}

function mainProfil() {
    


    // Modifie le titre dans le main
    document.getElementById('H2MainContent').textContent = "Votre profil";

    // Création d'une div qui contiendra un span
    const containerSpanDivMainContent = document.createElement("div");
    containerSpanDivMainContent.id = "spanDivMainContent";
    containerSpanDivMainContent.className = "ps-2 mb-2";

    const createSpanMainContent = document.createElement('span');
    createSpanMainContent.textContent = 'Venez jouer avec nous et faites le meilleur score possible';

    // Création d'une liste de règles
    const containerDivListeRegles = document.createElement('div');
    containerDivListeRegles.id = "divListeRegles";
    containerDivListeRegles.className = "ps-2 mb-2 mt-2";

    const createListeRegles = document.createElement('ul');
    createListeRegles.id = "listeRegles";
    createListeRegles.className = "a remplir";

    // Création du titre de la liste (HEAD n'est pas approprié ici)
    const createTitreListeRegles = document.createElement('h3');  // Changé de 'head' à 'h3'
    createTitreListeRegles.id = "titreListeRegles";
    createTitreListeRegles.className = "a remplir";
    createTitreListeRegles.textContent = 'Règles du jeu :';

    // Ajout du titre avant la liste
    containerDivListeRegles.appendChild(createTitreListeRegles);

    // Création des éléments de liste
    const regles = [
        "Retourner deux cartes. Si les images sont identiques le jeu laisse les cartes visibles.",
        "Si les images sont différentes, les cartes se retournent faces cachées là où elles étaient.",
        "La partie est terminée lorsque toutes les cartes ont été assemblées par paires"
    ];

    for (let index = 0; index < regles.length; index++) {
        const createListes = document.createElement('li');
        createListes.id = `liste${index}`;
        createListes.className = "a remplir";
        createListes.textContent = regles[index];  // Ajout du texte directement ici
        createListeRegles.appendChild(createListes);
    }

    const containerDivImageExempleMain = document.createElement('div');
    containerDivImageExempleMain.id = "DivImageExempleMain";
    containerDivImageExempleMain.className = "d-flex justify-content-center mt-3 mb-3";
    const createImageExempleMain = document.createElement('img')
    createImageExempleMain.id = 'ImageExempleMain'
    createImageExempleMain.className = 'img-fluid img-thumbnail imgExemple'
    createImageExempleMain.src = 'images/memory_exemple.jpg'

    const containerDivSpanEndMain = document.createElement('div');
    containerDivSpanEndMain.id = "DivSpanEndMain";
    containerDivSpanEndMain.className = "d-flex flex-column";

    const createSpanMainContent1 = document.createElement('span');
    createSpanMainContent1.id = 'spanMainContent1'
    createSpanMainContent1.textContent = 'Si vous voulez vous souvenir de votre score. Inscrivez-vous via le formulaire.';

    const createSpanMainContent2 = document.createElement('span');
    createSpanMainContent2.id = 'spanMainContent2'
    createSpanMainContent2.textContent = 'Le jeu garde les 5 meilleurs scores.';

    const createSpanMainContent3 = document.createElement('span');
    createSpanMainContent3.id = 'spanMainContent3'
    createSpanMainContent3.textContent = 'Si vous voulez relancer une partie cliquez sur la barre espace .';

    containerDivImageExempleMain.appendChild(createImageExempleMain)
    containerDivListeRegles.appendChild(createListeRegles);
    containerSpanDivMainContent.appendChild(createSpanMainContent);
    containerSpanDivMainContent.appendChild(containerDivListeRegles);
    containerSpanDivMainContent.appendChild(containerDivImageExempleMain);
    containerSpanDivMainContent.appendChild(containerDivSpanEndMain);
    containerDivSpanEndMain.appendChild(createSpanMainContent1);
    containerDivSpanEndMain.appendChild(createSpanMainContent2);
    containerDivSpanEndMain.appendChild(createSpanMainContent3);

    document.getElementById('divMainContent').appendChild(containerSpanDivMainContent);

    const replaceSpanMainContent2 = document.getElementById('spanMainContent2')
    replaceSpanMainContent2.innerHTML = replaceSpanMainContent2.innerHTML.replace(
        '5 meilleurs',
        '<strong>5 meilleurs</strong>'
    )

    const replaceSpanMainContent3 = document.getElementById('spanMainContent3')
    replaceSpanMainContent3.innerHTML = replaceSpanMainContent3.innerHTML.replace(
        'la barre espace',
        '<strong>la barre espace</strong>'
    )
}

function mainJouer() {
    


    // Modifie le titre dans le main
    document.getElementById('H2MainContent').textContent = "Jouer";

    // Création d'une div qui contiendra un span
    const containerSpanDivMainContent = document.createElement("div");
    containerSpanDivMainContent.id = "spanDivMainContent";
    containerSpanDivMainContent.className = "ps-2 mb-2";

    const createSpanMainContent = document.createElement('span');
    createSpanMainContent.textContent = 'Venez jouer avec nous et faites le meilleur score possible';

    // Création d'une liste de règles
    const containerDivListeRegles = document.createElement('div');
    containerDivListeRegles.id = "divListeRegles";
    containerDivListeRegles.className = "ps-2 mb-2 mt-2";

    const createListeRegles = document.createElement('ul');
    createListeRegles.id = "listeRegles";
    createListeRegles.className = "a remplir";

    // Création du titre de la liste (HEAD n'est pas approprié ici)
    const createTitreListeRegles = document.createElement('h3');  // Changé de 'head' à 'h3'
    createTitreListeRegles.id = "titreListeRegles";
    createTitreListeRegles.className = "a remplir";
    createTitreListeRegles.textContent = 'Règles du jeu :';

    // Ajout du titre avant la liste
    containerDivListeRegles.appendChild(createTitreListeRegles);

    // Création des éléments de liste
    const regles = [
        "Retourner deux cartes. Si les images sont identiques le jeu laisse les cartes visibles.",
        "Si les images sont différentes, les cartes se retournent faces cachées là où elles étaient.",
        "La partie est terminée lorsque toutes les cartes ont été assemblées par paires"
    ];

    for (let index = 0; index < regles.length; index++) {
        const createListes = document.createElement('li');
        createListes.id = `liste${index}`;
        createListes.className = "a remplir";
        createListes.textContent = regles[index];  // Ajout du texte directement ici
        createListeRegles.appendChild(createListes);
    }

    const containerDivImageExempleMain = document.createElement('div');
    containerDivImageExempleMain.id = "DivImageExempleMain";
    containerDivImageExempleMain.className = "d-flex justify-content-center mt-3 mb-3";
    const createImageExempleMain = document.createElement('img')
    createImageExempleMain.id = 'ImageExempleMain'
    createImageExempleMain.className = 'img-fluid img-thumbnail imgExemple'
    createImageExempleMain.src = 'images/memory_exemple.jpg'

    const containerDivSpanEndMain = document.createElement('div');
    containerDivSpanEndMain.id = "DivSpanEndMain";
    containerDivSpanEndMain.className = "d-flex flex-column";

    const createSpanMainContent1 = document.createElement('span');
    createSpanMainContent1.id = 'spanMainContent1'
    createSpanMainContent1.textContent = 'Si vous voulez vous souvenir de votre score. Inscrivez-vous via le formulaire.';

    const createSpanMainContent2 = document.createElement('span');
    createSpanMainContent2.id = 'spanMainContent2'
    createSpanMainContent2.textContent = 'Le jeu garde les 5 meilleurs scores.';

    const createSpanMainContent3 = document.createElement('span');
    createSpanMainContent3.id = 'spanMainContent3'
    createSpanMainContent3.textContent = 'Si vous voulez relancer une partie cliquez sur la barre espace .';

    containerDivImageExempleMain.appendChild(createImageExempleMain)
    containerDivListeRegles.appendChild(createListeRegles);
    containerSpanDivMainContent.appendChild(createSpanMainContent);
    containerSpanDivMainContent.appendChild(containerDivListeRegles);
    containerSpanDivMainContent.appendChild(containerDivImageExempleMain);
    containerSpanDivMainContent.appendChild(containerDivSpanEndMain);
    containerDivSpanEndMain.appendChild(createSpanMainContent1);
    containerDivSpanEndMain.appendChild(createSpanMainContent2);
    containerDivSpanEndMain.appendChild(createSpanMainContent3);

    document.getElementById('divMainContent').appendChild(containerSpanDivMainContent);

    const replaceSpanMainContent2 = document.getElementById('spanMainContent2')
    replaceSpanMainContent2.innerHTML = replaceSpanMainContent2.innerHTML.replace(
        '5 meilleurs',
        '<strong>5 meilleurs</strong>'
    )

    const replaceSpanMainContent3 = document.getElementById('spanMainContent3')
    replaceSpanMainContent3.innerHTML = replaceSpanMainContent3.innerHTML.replace(
        'la barre espace',
        '<strong>la barre espace</strong>'
    )
}