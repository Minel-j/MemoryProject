//Déclaration de variables
let nomDePage = 'Accueil'
window.addEventListener('load', init);
let pageActuelle = 0
let structureMainActuelle = "d-flex flex-column justify-content-center mt-6 ms-6 me-6 mb-6 bg-light border border-dark border-2 rounded-3";
let nbrCoupsPartieMemory = 0
let yV = 5
let xH = 4
let scorePwd = 0
let pwdVerif = false
let pwdConfirm = false
let emailVerif = false
let nameVerif = false

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
    container.className = "d-flex justify-content-around border-dark border border-2 rounded-3 pt-2 pb-2 ms-4 me-4 bg-light divParentNavBar";
    container.style = "--bs-bg-opacity: .5;"


    // 2. Créer 5 div enfants + boutons
    for (let i = 1; i <= 5; i++) {
        // Créer une div enfant
        const childDiv = document.createElement("div");
        childDiv.id = `divEnfant${i}`;
        childDiv.className = ''


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
    document.querySelector('header').prepend(container);

    const createH1TitrePage = document.createElement("h1")
    createH1TitrePage.id = 'h1TitleHeader'
    createH1TitrePage.textContent = `ENI - MEMORY - ${nomDePage}`
    container.appendChild(createH1TitrePage)

    const h1TitrePage = document.getElementById('h1TitleHeader')
    h1TitrePage.innerHTML = h1TitrePage.innerHTML.replace(
        'MEMORY',
        '<strong>MEMORY</strong>'
    )
}

function structureMain() {
    const container = document.createElement("div");
    container.id = "divMainContent";
    container.className = structureMainActuelle
    container.style = "--bs-bg-opacity: .5; min-height: calc(100vh - 150px);";
    document.querySelector('main').appendChild(container);

    const containerTitleDivMainContent = document.createElement("div");
    containerTitleDivMainContent.id = "TitleDivMainContent";
    containerTitleDivMainContent.className = "d-flex justify-content-center mb-4";
    container.appendChild(containerTitleDivMainContent)

    const containerContentDivMainContent = document.createElement("div");
    containerContentDivMainContent.id = "ContentDivMainContent";
    container.appendChild(containerContentDivMainContent)

    const createH2MainContent = document.createElement('h2')
    createH2MainContent.id = 'H2MainContent'
    containerTitleDivMainContent.appendChild(createH2MainContent)

    }

function mainAccueil() {
    // Modifie le titre dans le main
    document.getElementById('H2MainContent').textContent = "Bienvenue sur mon projet de Memory";

    structureMainActuelle = "d-flex flex-column  justify-content-center mt-6 ms-6 me-6 mb-6 bg-light border border-dark border-2 rounded-3";
    document.getElementById('divMainContent').className = structureMainActuelle

    // Création d'une div qui contiendra un span
    const containerDivMainContent = document.createElement("div");
    containerDivMainContent.id = "mainContent";
    containerDivMainContent.className = "ps-2 mb-2";
    document.getElementById('ContentDivMainContent').appendChild(containerDivMainContent);

    //Création d'un span
    const createSpanMainContent = document.createElement('span');
    createSpanMainContent.textContent = 'Venez jouer avec nous et faites le meilleur score possible';
    containerDivMainContent.appendChild(createSpanMainContent);

    // Création d'une liste de règles
    const containerDivListeRegles = document.createElement('div');
    containerDivListeRegles.id = "divListeRegles";
    containerDivListeRegles.className = "ps-2 mb-2 mt-2";
    containerDivMainContent.appendChild(containerDivListeRegles);

    const createTitreListeRegles = document.createElement('h3');  // Changé de 'head' à 'h3'
    createTitreListeRegles.id = "titreListeRegles";
    createTitreListeRegles.textContent = 'Règles du jeu :';
    containerDivListeRegles.appendChild(createTitreListeRegles);

    const createListeRegles = document.createElement('ul');
    createListeRegles.id = "listeRegles";
    containerDivListeRegles.appendChild(createListeRegles);

    // Création du titre de la liste (HEAD n'est pas approprié ici)


    // Ajout du titre avant la liste


    // Création des éléments de liste
    const regles = [
        "Retourner deux cartes. Si les images sont identiques le jeu laisse les cartes visibles.",
        "Si les images sont différentes, les cartes se retournent faces cachées là où elles étaient.",
        "La partie est terminée lorsque toutes les cartes ont été assemblées par paires"
    ];

    //Création de la liste en fonction du tableau précédent
    for (let index = 0; index < regles.length; index++) {
        const createListes = document.createElement('li');
        createListes.id = `liste${index}`;
        createListes.textContent = regles[index];  // Ajout du texte directement ici
        createListeRegles.appendChild(createListes);
    }

    //Création de la zone image
    const containerDivImageExempleMain = document.createElement('div');
    containerDivImageExempleMain.id = "DivImageExempleMain";
    containerDivImageExempleMain.className = "d-flex justify-content-center mt-3 mb-3";
    containerDivMainContent.appendChild(containerDivImageExempleMain);

    const createImageExempleMain = document.createElement('img')
    createImageExempleMain.id = 'ImageExempleMain'
    createImageExempleMain.className = 'img-fluid img-thumbnail imgExemple'
    createImageExempleMain.src = 'images/memory_exemple.jpg'
    containerDivImageExempleMain.appendChild(createImageExempleMain)

    const containerDivSpanEndMain = document.createElement('div');
    containerDivSpanEndMain.id = "DivSpanEndMain";
    containerDivSpanEndMain.className = "d-flex flex-column";
    containerDivMainContent.appendChild(containerDivSpanEndMain);

    const createSpanMainContent1 = document.createElement('span');
    createSpanMainContent1.id = 'spanMainContent1'
    createSpanMainContent1.textContent = 'Si vous voulez vous souvenir de votre score. Inscrivez-vous via le formulaire.';
    containerDivSpanEndMain.appendChild(createSpanMainContent1);

    const createSpanMainContent2 = document.createElement('span');
    createSpanMainContent2.id = 'spanMainContent2'
    createSpanMainContent2.textContent = 'Le jeu garde les 5 meilleurs scores.';
    containerDivSpanEndMain.appendChild(createSpanMainContent2);

    const createSpanMainContent3 = document.createElement('span');
    createSpanMainContent3.id = 'spanMainContent3'
    createSpanMainContent3.textContent = 'Si vous voulez relancer une partie cliquez sur la barre espace .';
    containerDivSpanEndMain.appendChild(createSpanMainContent3);

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
    document.querySelector('footer').appendChild(containerDivMainFooter);

    const containerImgLeftFooter = document.createElement("img");
    containerImgLeftFooter.id = "imgLeftFooter";
    containerImgLeftFooter.className = "imageDefilante";
    containerImgLeftFooter.src = "images/icons/creeper.png";
    containerDivMainFooter.appendChild(containerImgLeftFooter)

    const containerDivLeftFooter = document.createElement("div");
    containerDivLeftFooter.id = "divLeftFooter";
    containerDivLeftFooter.className = "containerImg";
    containerDivMainFooter.appendChild(containerDivLeftFooter)

    const containerDivCenterFooter = document.createElement("div");
    containerDivCenterFooter.id = "divCenterFooter";
    containerDivCenterFooter.className = "a remplir";
    containerDivMainFooter.appendChild(containerDivCenterFooter)
    const containerH5CenterFooter = document.createElement("h5");
    containerH5CenterFooter.id = "H5CenterFooter";
    containerH5CenterFooter.className = "a remplir";
    containerH5CenterFooter.textContent = 'COPYRIGHT'
    containerDivCenterFooter.appendChild(containerH5CenterFooter)

    const containerDivRightFooter = document.createElement("div");
    containerDivRightFooter.id = "divRightFooter";
    containerDivRightFooter.className = "";
    containerDivMainFooter.appendChild(containerDivRightFooter)

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
        document.getElementById('mainContent').remove()
        mainAccueil();
    }
    function handleInscription() {
        document.getElementById('mainContent').remove()
        mainInscription();
        verificationInscription()
        boutonInscription()
    }
    function handleConnexion() {
        document.getElementById('mainContent').remove()
        mainConnexion()
        BtnPageConnexion()
    }
    function handleProfil() {
        document.getElementById('mainContent').remove()
        mainProfil()
    }
    function handleJouer() {
        document.getElementById('mainContent').remove()
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


    structureMainActuelle = "d-flex flex-column  justify-content-center mt-7 ms-7 me-7 mb-7 bg-light border border-dark border-2 rounded-3";
    document.getElementById('divMainContent').className = structureMainActuelle
    document.getElementById('divMainContent').style = "--bs-bg-opacity: .5;";

    // Création d'une div pour l'ensemble de la main
    const containerMainContent = document.createElement("div");
    containerMainContent.id = "mainContent";
    containerMainContent.className = "ps-2 mb-2";
    document.getElementById('divMainContent').appendChild(containerMainContent);

    //--------------------------ZONE UTILISATEUR-------------------------------------

    //Création d'une div pour la zone Nom d'utilisateur
    const createDivNomUtil = document.createElement('div')
    createDivNomUtil.id = "divNomUtil";
    createDivNomUtil.className = " form-floating m-2 mb-3";
    containerMainContent.appendChild(createDivNomUtil);

    //Création de l'input du nom d'utilisateur
    const createInputNomUtil = document.createElement('input')
    createInputNomUtil.id = "inputNomUtil";
    createInputNomUtil.className = " form-control";
    createInputNomUtil.placeholder = "3 caractères minimum"
    createInputNomUtil.type = "text"
    createInputNomUtil.style.width = "94%"
    createInputNomUtil.value = "toto"
    createDivNomUtil.appendChild(createInputNomUtil);


    //Création du label du nom d'utilisateur
    const createLabelNomUtil = document.createElement('label')
    createLabelNomUtil.id = "labelNomUtil";
    createLabelNomUtil.className = "labelSubscribe";
    createLabelNomUtil.textContent = "Nom d'utilisateur :"
    createLabelNomUtil.setAttribute("for", "inputNomUtil")
    createDivNomUtil.appendChild(createLabelNomUtil);

    //--------------------------ZONE EMAIL-------------------------------------

    //Création d'une div pour la zone email
    const createDivEmailUtil = document.createElement('div')
    createDivEmailUtil.id = "divEmailUtil";
    createDivEmailUtil.className = "form-floating m-2 mb-3";
    containerMainContent.appendChild(createDivEmailUtil);

    //Création de l'input de l'email
    const createInputEmailUtil = document.createElement('input')
    createInputEmailUtil.id = "inputEmailUtil";
    createInputEmailUtil.className = "form-control ";
    createInputEmailUtil.placeholder = "votre email"
    createInputEmailUtil.type = "email"
    createInputEmailUtil.style.width = "94%"
    createInputEmailUtil.value = "toto@toto.fr"
    createDivEmailUtil.appendChild(createInputEmailUtil);


    //Création du label de l'email
    const createLabelEmailUtil = document.createElement('label')
    createLabelEmailUtil.id = "labelEmailUtil";
    createLabelEmailUtil.className = "labelSubscribe";
    createLabelEmailUtil.textContent = "Entrez votre email :"
    createLabelEmailUtil.setAttribute('for', 'inputEmailUtil')
    createDivEmailUtil.appendChild(createLabelEmailUtil);

    //--------------------------ZONE PASSWORD-------------------------------------

    //Création d'une div pour la zone password
    const createDivPwdUtil = document.createElement('div')
    createDivPwdUtil.id = "divPwdUtil";
    createDivPwdUtil.className = "form-floating m-2 mb-3";
    containerMainContent.appendChild(createDivPwdUtil);

    //Création de l'input du password
    const createInputPwdUtil = document.createElement('input')
    createInputPwdUtil.id = "inputPwdUtil";
    createInputPwdUtil.className = "form-control ";
    createInputPwdUtil.placeholder = "votre mot de passe"
    createInputPwdUtil.type = "password"
    createInputPwdUtil.style.width = "94%"
    createInputPwdUtil.value = "azerty@12"
    createDivPwdUtil.appendChild(createInputPwdUtil);


    //Création du label du password
    const createLabelPwdUtil = document.createElement('label')
    createLabelPwdUtil.id = "labelPwdUtil";
    createLabelPwdUtil.className = "labelSubscribe";
    createLabelPwdUtil.textContent = "Mot de passe :"
    createLabelPwdUtil.setAttribute('for', 'inputPwdUtil')
    createDivPwdUtil.appendChild(createLabelPwdUtil);

    //--------------------------ZONE JAUGE PASSWORD-------------------------------------

    //Création de la div qui contiendra la jauge de fortification
    const createDivJaugePwdUtil = document.createElement('div')
    createDivJaugePwdUtil.id = "divJaugePwdUtil";
    createDivJaugePwdUtil.className = "d-flex justify-content-center p-1";
    createDivPwdUtil.appendChild(createDivJaugePwdUtil);

    //Création de la div qui contiendra la jauge faible de fortification
    const createDivJaugeFaiblePwdUtil = document.createElement('div')
    createDivJaugeFaiblePwdUtil.id = "divJaugeFaiblePwdUtil";
    createDivJaugeFaiblePwdUtil.className = "ms-1 me-1 d-none";
    createDivJaugePwdUtil.appendChild(createDivJaugeFaiblePwdUtil);

    //Création du label faible
    const createJaugeFaiblePwdUtil = document.createElement('label')
    createJaugeFaiblePwdUtil.id = "jaugeFaiblePwdUtil";
    createJaugeFaiblePwdUtil.className = "";
    createJaugeFaiblePwdUtil.textContent = "FAIBLE"
    createDivJaugeFaiblePwdUtil.appendChild(createJaugeFaiblePwdUtil);

    //Création de la div qui contiendra la jauge moyen de fortification
    const createDivJaugeMoyenPwdUtil = document.createElement('div')
    createDivJaugeMoyenPwdUtil.id = "divJaugeMoyenPwdUtil";
    createDivJaugeMoyenPwdUtil.className = "ms-1 me-1 d-none";
    createDivJaugePwdUtil.appendChild(createDivJaugeMoyenPwdUtil);

    //Création du label moyen
    const createJaugeMoyenPwdUtil = document.createElement('label')
    createJaugeMoyenPwdUtil.id = "jaugeMoyenPwdUtil";
    createJaugeMoyenPwdUtil.className = "a remplir";
    createJaugeMoyenPwdUtil.textContent = "MOYEN"
    createDivJaugeMoyenPwdUtil.appendChild(createJaugeMoyenPwdUtil);

    //Création de la div qui contiendra la jauge fort de fortification
    const createDivJaugeFortPwdUtil = document.createElement('div')
    createDivJaugeFortPwdUtil.id = "divJaugeFortPwdUtil";
    createDivJaugeFortPwdUtil.className = "ms-1 me-1 d-none";
    createDivJaugePwdUtil.appendChild(createDivJaugeFortPwdUtil);

    //Création du label fort
    const createJaugeFortPwdUtil = document.createElement('label')
    createJaugeFortPwdUtil.id = "jaugeFortPwdUtil";
    createJaugeFortPwdUtil.className = "a remplir";
    createJaugeFortPwdUtil.textContent = "FORT"
    createDivJaugeFortPwdUtil.appendChild(createJaugeFortPwdUtil);


    //--------------------------ZONE VERIF PASSWORD-------------------------------------

    //Création d'une div pour la zone de verification du password
    const createDivVerifPwdUtil = document.createElement('div')
    createDivVerifPwdUtil.id = "divVerifPwdUtil";
    createDivVerifPwdUtil.className = "form-floating m-2 mb-3";
    containerMainContent.appendChild(createDivVerifPwdUtil);

    //Création de l'input de l'email
    const createInputVerifPwdUtil = document.createElement('input')
    createInputVerifPwdUtil.id = "inputVerifPwdUtil";
    createInputVerifPwdUtil.className = "form-control";
    createInputVerifPwdUtil.placeholder = "confirmez le mot de passe"
    createInputVerifPwdUtil.type = "password"
    createInputVerifPwdUtil.style.width = "94%"
    createInputVerifPwdUtil.value = "azerty@12"
    createDivVerifPwdUtil.appendChild(createInputVerifPwdUtil);

    //Création du label de verification du password
    const createLabelVerifPwdUtil = document.createElement('label')
    createLabelVerifPwdUtil.id = "labelVerifPwdUtil";
    createLabelVerifPwdUtil.className = " labelSubscribe";
    createLabelVerifPwdUtil.textContent = "Confirmez le mot de passe :"
    createLabelVerifPwdUtil.setAttribute('for', 'inputVerifPwdUtil')
    createDivVerifPwdUtil.appendChild(createLabelVerifPwdUtil);

    //--------------------------ZONE BOUTONS-------------------------------------

    //Création d'une div pour la zone des boutons
    const createDivBtnUtil = document.createElement('div')
    createDivBtnUtil.id = "divBtnUtil";
    createDivBtnUtil.className = "d-flex justify-content-around";
    containerMainContent.appendChild(createDivBtnUtil);

    //Création du bouton de creation du compte
    const createBtnCreaUtil = document.createElement('button')
    createBtnCreaUtil.id = "btnCreaUtil";
    createBtnCreaUtil.className = "btn btn-secondary border border-dark rounded-pill ps-4 pe-4 ";
    createBtnCreaUtil.textContent = "Création du compte";
    // createBtnCreaUtil.disabled = true
    createDivBtnUtil.appendChild(createBtnCreaUtil);

    //Création du bouton de reset
    const createBtnResetUtil = document.createElement('button')
    createBtnResetUtil.id = "btnResetUtil";
    createBtnResetUtil.className = "btn btn-secondary border border-dark rounded-pill ps-4 pe-4";
    createBtnResetUtil.textContent = "Reset";
    createDivBtnUtil.appendChild(createBtnResetUtil);



}

function mainConnexion() {
    // Modifie le titre dans le main
    document.getElementById('H2MainContent').textContent = "Connectez-vous";

    structureMainActuelle = "d-flex flex-column  justify-content-center mt-7 ms-7 me-7 mb-7 bg-light border border-dark border-2 rounded-3 divMainContentConnexion";
    document.getElementById('divMainContent').className = structureMainActuelle
    document.getElementById('divMainContent').style = "--bs-bg-opacity: .5;";


    // Création d'une div pour l'ensemble de la main
    const containerMainContent = document.createElement("div");
    containerMainContent.id = "mainContent";
    containerMainContent.className = "ps-2 mb-2";
    document.getElementById('divMainContent').appendChild(containerMainContent);

    //--------------------------ZONE EMAIL-------------------------------------

    //Création d'une div pour la zone email
    const createDivEmailConnexion = document.createElement('div')
    createDivEmailConnexion.id = "divEmailConnexion";
    createDivEmailConnexion.className = "form-floating mb-3";
    containerMainContent.appendChild(createDivEmailConnexion);

    //Création de l'input de l'email
    const createInputEmailConnexion = document.createElement('input')
    createInputEmailConnexion.id = "inputEmailConnexion";
    createInputEmailConnexion.className = "form-control";
    createInputEmailConnexion.placeholder = "votre email"
    createInputEmailConnexion.type = "email"
    createInputEmailConnexion.style.width = "94%"
    createDivEmailConnexion.appendChild(createInputEmailConnexion);

    //Création du label de l'email
    const createLabelEmailConnexion = document.createElement('label')
    createLabelEmailConnexion.id = "labelEmailConnexion";
    createLabelEmailConnexion.className = "a remplir";
    createLabelEmailConnexion.textContent = "Email : (Exemple : john@doe.fr)"
    createLabelEmailConnexion.setAttribute("for", "inputEmailConnexion")
    createDivEmailConnexion.appendChild(createLabelEmailConnexion);

    //--------------------------ZONE PASSWORD-------------------------------------

    //Création d'une div pour la zone email
    const createDivPwdConnexion = document.createElement('div')
    createDivPwdConnexion.id = "divPwdConnexion";
    createDivPwdConnexion.className = "form-floating mb-3";
    containerMainContent.appendChild(createDivPwdConnexion);

    //Création de l'input de l'email
    const createInputPwdConnexion = document.createElement('input')
    createInputPwdConnexion.id = "inputPwdConnexion";
    createInputPwdConnexion.className = "form-control";
    createInputPwdConnexion.placeholder = "votre mot de passe"
    createInputPwdConnexion.type = "password"
    createInputPwdConnexion.style.width = "94%"
    createDivPwdConnexion.appendChild(createInputPwdConnexion);

    //Création du label de l'email
    const createLabelPwdConnexion = document.createElement('label')
    createLabelPwdConnexion.id = "labelPwdConnexion";
    createLabelPwdConnexion.className = "a remplir";
    createLabelPwdConnexion.textContent = "Entrez votre mot de passe :"
    createLabelPwdConnexion.setAttribute("for", "inputPwdConnexion")
    createDivPwdConnexion.appendChild(createLabelPwdConnexion);

    //--------------------------ZONE BOUTONS-------------------------------------

    //Création d'une div pour la zone des boutons
    const createDivBtnConnexion = document.createElement('div')
    createDivBtnConnexion.id = "divBtnConnexion";
    createDivBtnConnexion.className = "d-flex justify-content-around";
    containerMainContent.appendChild(createDivBtnConnexion);

    //Création du bouton de creation du compte
    const createBtnCreaConnexion = document.createElement('button')
    createBtnCreaConnexion.id = "btnCreaConnexion";
    createBtnCreaConnexion.className = "btn btn-secondary border border-dark rounded-pill ps-4 pe-4 BtnConnexion";
    createBtnCreaConnexion.textContent = "Connexion";
    createDivBtnConnexion.appendChild(createBtnCreaConnexion);

    //Création du bouton de reset
    const createBtnResetConnexion = document.createElement('button')
    createBtnResetConnexion.id = "btnResetConnexion";
    createBtnResetConnexion.className = "btn btn-secondary border border-dark rounded-pill ps-4 pe-4 BtnConnexion";
    createBtnResetConnexion.textContent = "Reset";
    createDivBtnConnexion.appendChild(createBtnResetConnexion);

}

function mainProfil() {
    // Modifie le titre dans le main
    document.getElementById('H2MainContent').textContent = "Votre profil";

    structureMainActuelle = "d-flex flex-column  justify-content-center mt-7 ms-7 me-7 mb-7 bg-light border border-dark border-2 rounded-3 divMainContentConnexion";
    document.getElementById('divMainContent').className = structureMainActuelle
    document.getElementById('divMainContent').style = "--bs-bg-opacity: .5;";
    const userSession = JSON.parse(sessionStorage.getItem('userSession'))


    // Création d'une div pour l'ensemble de la main
    const containerMainContent = document.createElement("div");
    containerMainContent.id = "mainContent";
    containerMainContent.className = "ps-2 mb-2";
    document.getElementById('divMainContent').appendChild(containerMainContent);

    //Création de la div contenant l'image du profil
    const containerDivImageProfil = document.createElement('div');
    containerDivImageProfil.id = "divImageProfil";
    containerDivImageProfil.className = "d-flex justify-content-center mt-3 mb-4";
    containerMainContent.appendChild(containerDivImageProfil);

    //Création de de l'image du profil
    const containerImageProfil = document.createElement('img')
    containerImageProfil.id = 'imageProfil'
    containerImageProfil.className = 'img-fluid img-thumbnail imgAvatar'
    containerImageProfil.src = 'images/avatar/avatar-steve.webp'
    containerDivImageProfil.appendChild(containerImageProfil)


    //--------------------------ZONE NOM UTIL-------------------------------------

    //Création d'une div pour la zone Nom utilisateur
    const createDivNameProfil = document.createElement('div')
    createDivNameProfil.id = "divNameProfil";
    createDivNameProfil.className = "mb-3 border-bottom border-dark ms-1 me-2";
    containerMainContent.appendChild(createDivNameProfil);

    //Création du label du Nom d'utilisateur
    const createLabelNameProfil = document.createElement('label')
    createLabelNameProfil.id = "labelNameProfil";
    createLabelNameProfil.className = "a remplir";
    createLabelNameProfil.textContent = "Nom d'utilisateur :"
    createLabelNameProfil.setAttribute("for", "inputNameProfil")
    createDivNameProfil.appendChild(createLabelNameProfil);

    //Création du label du Nom d'utilisateur
    const createInputNameProfil = document.createElement('input')
    createInputNameProfil.id = "inputNameProfil";
    createInputNameProfil.className = "inputSaisie";
    createInputNameProfil.placeholder = "votre nom d'utilisateur"
    createInputNameProfil.type = "text"
    createInputNameProfil.style.width = "94%"
    createInputNameProfil.readOnly = true
    createDivNameProfil.appendChild(createInputNameProfil);



    //--------------------------ZONE EMAIL-------------------------------------

    //Création d'une div pour la zone email
    const createDivEmailProfil = document.createElement('div')
    createDivEmailProfil.id = "divEmailProfil";
    createDivEmailProfil.className = "mb-3 border-bottom border-dark ms-1 me-2";
    containerMainContent.appendChild(createDivEmailProfil);

    //Création du label de l'email
    const createLabelEmailProfil = document.createElement('label')
    createLabelEmailProfil.id = "labelEmailProfil";
    createLabelEmailProfil.className = "a remplir";
    createLabelEmailProfil.textContent = "Votre email :"
    createLabelEmailProfil.setAttribute("for", "inputEmailProfil")
    createDivEmailProfil.appendChild(createLabelEmailProfil);

    //Création de l'input de l'email
    const createInputEmailProfil = document.createElement('input')
    createInputEmailProfil.id = "inputEmailProfil";
    createInputEmailProfil.className = "inputSaisie";
    createInputEmailProfil.placeholder = "votre email"
    createInputEmailProfil.type = "email"
    createInputEmailProfil.style.width = "94%"
    createInputEmailProfil.readOnly = true
    createDivEmailProfil.appendChild(createInputEmailProfil);

    //--------------------------ZONE SELECT TYPE--------------------------------

    //Création de la zone de sélection du jeu
    const createDivSelectTypeJeu = document.createElement('div')
    createDivSelectTypeJeu.id = "divSelectTypeJeu";
    createDivSelectTypeJeu.className = "mb-3 d-flex flex-column align-items-start";
    containerMainContent.appendChild(createDivSelectTypeJeu);

    //Création du label du choix du type de jeu
    const createLabelSelectTypeJeu = document.createElement('label')
    createLabelSelectTypeJeu.id = "labelSelectTypeJeu";
    createLabelSelectTypeJeu.className = "a remplir";
    createLabelSelectTypeJeu.textContent = "Choix du memory :"
    createDivSelectTypeJeu.appendChild(createLabelSelectTypeJeu);

    const createSelectTypeJeu = document.createElement('select')
    createSelectTypeJeu.id = "selectTypeJeu";
    createSelectTypeJeu.className = "text-lowercase text-capitalize";
    createDivSelectTypeJeu.appendChild(createSelectTypeJeu);

    const optionsTypeJeu = ['exemple', 'dinosaures', 'chiens']

    optionsTypeJeu.forEach(element => {
        const optionTypeJeu = document.createElement('option');
        optionTypeJeu.value = element
        optionTypeJeu.id = element
        optionTypeJeu.className = "optionTypeJeu"
        optionTypeJeu.textContent = element
        createSelectTypeJeu.appendChild(optionTypeJeu)
    });
    //--------------------------ZONE IMAGE-------------------------------------
    //Création de la div contenant l'image representant le type de jeu
    const containerDivImageProfilTypeJeu = document.createElement('div');
    containerDivImageProfilTypeJeu.id = "divImageProfilTypeJeu";
    containerDivImageProfilTypeJeu.className = "d-flex justify-content-center mt-3 mb-4";
    containerMainContent.appendChild(containerDivImageProfilTypeJeu);

    //Création de de l'image representant le type de jeu
    const containerImageProfilTypeJeu = document.createElement('img')
    containerImageProfilTypeJeu.id = 'imageProfilTypeJeu'
    containerImageProfilTypeJeu.className = 'img-fluid img-thumbnail imgTypeJeu'
    containerImageProfilTypeJeu.src = 'images/memory_exemple.jpg'
    containerDivImageProfilTypeJeu.appendChild(containerImageProfilTypeJeu)

    //--------------------------ZONE SELECT TAILLE------------------------------

    //Création de la zone de sélection du jeu
    const createDivSelectTailleJeu = document.createElement('div')
    createDivSelectTailleJeu.id = "divSelectTailleJeu";
    createDivSelectTailleJeu.className = "mb-3 d-flex flex-column align-items-start";
    containerMainContent.appendChild(createDivSelectTailleJeu);

    //Création du label du choix du type de jeu
    const createLabelSelectTailleJeu = document.createElement('label')
    createLabelSelectTailleJeu.id = "labelSelectTailleJeu";
    createLabelSelectTailleJeu.className = "a remplir";
    createLabelSelectTailleJeu.textContent = "Choix du memory :"
    createDivSelectTailleJeu.appendChild(createLabelSelectTailleJeu);

    const createSelectTailleJeu = document.createElement('select')
    createSelectTailleJeu.id = "selectTailleJeu";
    createSelectTailleJeu.className = "text-lowercase text-capitalize";
    createDivSelectTailleJeu.appendChild(createSelectTailleJeu);

    const optionsTailleJeu = ['3*2', '3*4', '4*4', '4*5']

    optionsTailleJeu.forEach(element => {
        const optionTailleJeu = document.createElement('option');
        optionTailleJeu.value = element
        optionTailleJeu.id = element
        optionTailleJeu.className = "optionTailleJeu"
        optionTailleJeu.textContent = element
        createSelectTailleJeu.appendChild(optionTailleJeu)
    });

    //--------------------------ZONE BOUTON------------------------------

    //Création de la zone de sélection du jeu
    const createDivButtonProfil = document.createElement('div')
    createDivButtonProfil.id = "divButtonProfil";
    createDivButtonProfil.className = "d-flex justify-content-around mb-3";
    containerMainContent.appendChild(createDivButtonProfil);

    //Création du bouton de selection du jeu
    const createButtonProfil = document.createElement('button')
    createButtonProfil.id = "buttonProfil";
    createButtonProfil.className = "btn btn-secondary border border-dark rounded-pill ps-4 pe-4 BtnConnexion";
    createButtonProfil.textContent = "Enregistrer options";
    createDivButtonProfil.appendChild(createButtonProfil);

    //Création du bouton de reset
    const createButtonResetProfil = document.createElement('button')
    createButtonResetProfil.id = "buttonResetProfil";
    createButtonResetProfil.className = "btn btn-secondary border border-dark rounded-pill ps-4 pe-4 BtnConnexion";
    createButtonResetProfil.textContent = "Reset";
    createDivButtonProfil.appendChild(createButtonResetProfil);

    //--------------------------ZONE RESULTATS JOUEUR------------------------------

    //Création de la zone des résultat du joueur
    const createDivScoresProfil = document.createElement('div')
    createDivScoresProfil.id = "divScoresProfil";
    createDivScoresProfil.className = "d-flex justify-content-center";
    containerMainContent.appendChild(createDivScoresProfil);

    //Création du tableau d'affichage des résultat du joueur
    const createArrayScoresProfil = document.createElement('table')
    createArrayScoresProfil.id = "arrayScoresProfil";
    createArrayScoresProfil.className = "table-hover border border-1 border-dark";
    createDivScoresProfil.appendChild(createArrayScoresProfil);

    //Création des lignes du tableau d'affichage des résultat du joueur
    const createTrScoresProfil = document.createElement('tr')
    createTrScoresProfil.id = "trScoresProfil";
    createTrScoresProfil.className = "";
    createArrayScoresProfil.appendChild(createTrScoresProfil);

    const cellulesArray = {
        'pseudo': 'Pseudo',
        'score': 'Score',
        'taille': 'Taille',
        'choixMemory': 'Choix Memory',
        'date': 'Date'
    };

    for (const index in cellulesArray) {
        const createTdScoresProfil = document.createElement('td')
        createTdScoresProfil.id = index;
        createTdScoresProfil.className = "border border-1 border-dark";
        createTdScoresProfil.textContent = cellulesArray[index];
        createTrScoresProfil.appendChild(createTdScoresProfil);
    }
    //Ajout des derniers meilleurs scores
    //récupération des données depuis le localStorage


    if (localStorage.getItem('scoresMemory')) {
        const recupScoresMemoryStr = localStorage.getItem('scoresMemory')
        //Convertit le JSON et tableau
        let recupScoresMemory = JSON.parse(recupScoresMemoryStr)
        recupScoresMemory.sort((a, b) => a.score - b.score)

        //Recuperation du nom utilisateur de la session 
        const recupNomUtilSession = sessionStorage.getItem('userSession')
        let nomUtilSession = JSON.parse(recupNomUtilSession).nom
        console.log("nomUtilSession " + nomUtilSession);



        //parcour chaques lignes du tableau pour creer une ligne du tableau
        recupScoresMemory.forEach((ligne, index) => {
            // Pas besoin de JSON.parse car ligne est déjà un objet
            console.log("Ligne actuelle:", ligne); // Debug: affiche chaque score

            // Comparaison directe avec le pseudo
            if (ligne.pseudo === nomUtilSession) {  // Notez .pseudo et non .nom
                console.log("Correspondance trouvée ! Pseudo:", ligne.pseudo);

                // Création de la ligne de tableau (comme dans votre code original)
                const createTrScoresLocalStorage = document.createElement('tr');
                createTrScoresLocalStorage.className = "";
                createArrayScoresProfil.appendChild(createTrScoresLocalStorage);

                // Ajout des cellules TD avec les valeurs
                for (const [cle, valeur] of Object.entries(ligne)) {
                    const createTdScoresLocalStorage = document.createElement('td');
                    createTdScoresLocalStorage.className = "border border-1 border-dark";
                    createTdScoresLocalStorage.textContent = valeur;
                    createTrScoresLocalStorage.appendChild(createTdScoresLocalStorage);
                }
            }
        });
    }


    gestionProfil()


}

function mainJouer() {
    // Modifie le titre dans le main
    document.getElementById('H2MainContent').textContent = "Derniers meilleurs scores :";

    // Création d'une div pour l'ensemble de la main
    const containerMainContent = document.createElement("div");
    containerMainContent.id = "mainContent";
    containerMainContent.className = "ps-2 pe-2 mb-2";
    document.getElementById('divMainContent').appendChild(containerMainContent);

    //--------------------------ZONE TABLEAU DERNIERS SCORES-------------------------------------
    //Création de la zone des résultat du joueur
    const createDivScoresJouer = document.createElement('div')
    createDivScoresJouer.id = "divScoresJouer";
    createDivScoresJouer.className = "d-flex justify-content-center";
    containerMainContent.appendChild(createDivScoresJouer);

    //Création du tableau d'affichage des résultat du joueur
    const createArrayScoresJouer = document.createElement('table')
    createArrayScoresJouer.id = "arrayScoresJouer";
    createArrayScoresJouer.className = "table-hover border border-1 border-dark";
    createDivScoresJouer.appendChild(createArrayScoresJouer);

    //Création des lignes du tableau d'affichage des résultat du joueur
    const createTrScoresJouer = document.createElement('tr')
    createTrScoresJouer.id = "trScoresJouer";
    createTrScoresJouer.className = "";
    createArrayScoresJouer.appendChild(createTrScoresJouer);

    const cellulesArray = {
        'pseudo': 'Pseudo',
        'score': 'Score',
        'taille': 'Taille',
        'choixMemory': 'Choix Memory',
        'date': 'Date'
    };


    for (const index in cellulesArray) {
        const createTdScoresJouer = document.createElement('td')
        createTdScoresJouer.id = index;
        createTdScoresJouer.className = "border border-1 border-dark";
        createTdScoresJouer.textContent = cellulesArray[index];
        createTrScoresJouer.appendChild(createTdScoresJouer);
    }

    //Ajout des derniers meilleurs scores
    //récupération des données depuis le localStorage
    if (localStorage.getItem('scoresMemory')) {
        const recupScoresMemoryStr = localStorage.getItem('scoresMemory')
        //Convertit le JSON et tableau
        let recupScoresMemory = JSON.parse(recupScoresMemoryStr)
        recupScoresMemory.sort((a, b) => a.score - b.score)

        //parcour chaques lignes du tableau pour creer une ligne du tableau
        recupScoresMemory.forEach((ligne, index) => {
            const createTrScoresLocalStorage = document.createElement('tr')
            createTrScoresLocalStorage.className = "";
            createArrayScoresJouer.appendChild(createTrScoresLocalStorage);

            //Pour chaques lignes il va créer une cellule contenant les infos des scores
            for (const [cle, valeur] of Object.entries(ligne)) {
                const createTdScoresLocalStorage = document.createElement('td')
                createTdScoresLocalStorage.className = "border border-1 border-dark";
                createTdScoresLocalStorage.textContent = valeur;
                createTrScoresLocalStorage.appendChild(createTdScoresLocalStorage);
            }
        });
    }

    //--------------------------ZONE SPAN-------------------------------------
    //Création de la zone des résultat du joueur
    const createDivSpanJouer = document.createElement('div')
    createDivSpanJouer.id = "divSpanJouer";
    createDivSpanJouer.className = "d-flex flex-column align-items-center m-4";
    containerMainContent.appendChild(createDivSpanJouer);

    //Création d'un span
    const createSpanMainContent1 = document.createElement('span');
    createSpanMainContent1.textContent = "Tentez de gagner avec le moins d'essais possible";
    createDivSpanJouer.appendChild(createSpanMainContent1);
    //Création d'un span
    const createSpanMainContent2 = document.createElement('span');
    createSpanMainContent2.textContent = "Appuyez sur la barre d'espace pour relancer le jeu";
    createDivSpanJouer.appendChild(createSpanMainContent2);
    //Création d'un span
    const createSpanMainContent3 = document.createElement('span');
    createSpanMainContent3.id = `nbresDeCoups`;
    createSpanMainContent3.textContent = `Nombres de coups${nbrCoupsPartieMemory}`;
    createDivSpanJouer.appendChild(createSpanMainContent3);

    //--------------------------ZONE TABLEAU JEU MEMORY-------------------------------------
    //Verifie si l'utilisateur connexté a spécifié un jeu et une taille
    if (sessionStorage.getItem('tailleMemory') && sessionStorage.getItem('typeMemory')) {
        const tailleSessionMemory = sessionStorage.getItem('tailleMemory').split('*')
        yV = tailleSessionMemory[0]
        xH = tailleSessionMemory[1]
    } else {
        alert("Veuillez vous connecter avant de commencer à jouer!")
        document.getElementById('mainContent').remove()
        mainConnexion()
    }

    //Création de la zone pour le tableau du memory
    const createDivArrayMemoryJouer = document.createElement('div')
    createDivArrayMemoryJouer.id = "divArrayMemoryJouer";
    createDivArrayMemoryJouer.className = "d-flex flex-column align-items-center mb-2";
    containerMainContent.appendChild(createDivArrayMemoryJouer);

    //Création du tableau du memory
    const createArrayMemoryJouer = document.createElement('table')
    createArrayMemoryJouer.id = "arrayMemoryJouer";
    createArrayMemoryJouer.className = "table-hover border border-3 border-dark";
    createDivArrayMemoryJouer.appendChild(createArrayMemoryJouer);
    let NbreCasesArrayMemory = 0

    //Création des cellules du tableau du memory
    for (let i = 0; i < yV; i++) {
        //Création des lignes du tableau du memory
        const createTrArrayMemoryJouer = document.createElement('tr')
        createTrArrayMemoryJouer.id = `trArrayMemoryJouer${i}`;
        createTrArrayMemoryJouer.className = "a remplir";
        createArrayMemoryJouer.appendChild(createTrArrayMemoryJouer);

        for (let j = 0; j < xH; j++) {
            //Création des colonnes du tableau du memory
            const createTdArrayMemoryJouer = document.createElement('td')

            createTdArrayMemoryJouer.className = "border border-2 border-dark bg-white text-center";
            // createTdArrayMemoryJouer.textContent = NbreCasesArrayMemory;
            createTrArrayMemoryJouer.appendChild(createTdArrayMemoryJouer);
            const createImgArrayMemoryJouer = document.createElement('img')
            createImgArrayMemoryJouer.id = NbreCasesArrayMemory;
            createImgArrayMemoryJouer.src = 'images/icons/question.svg'
            createImgArrayMemoryJouer.className = 'img-fluid imgMemory'
            createTdArrayMemoryJouer.appendChild(createImgArrayMemoryJouer);
            NbreCasesArrayMemory++
        }

    }
    gestionMemory()

}

function verificationInscription() {
    const inptNomUtil = document.getElementById('inputNomUtil')
    const inptEmailUtil = document.getElementById('inputEmailUtil')
    const inptPwdUtil = document.getElementById('inputPwdUtil')
    const inptVerifPwdUtil = document.getElementById('inputVerifPwdUtil')

    //--------------------------ZONE VERIF NOM UTIL-------------------------------------
    inptNomUtil.addEventListener('input', function () {
        let verifNomUtil = inptNomUtil.value.trim()
        if (verifNomUtil.length >= 3) {
            inptNomUtil.setAttribute('class', 'form-control is-valid')
            nameVerif = true


            activationBtnInscription()
        } else if (verifNomUtil.length <= 3) {
            inptNomUtil.setAttribute('class', 'form-control is-invalid')
        }
    })

    //--------------------------ZONE VERIF EMAIL UTIL-------------------------------------
    inptEmailUtil.addEventListener('input', function () {
        let verifEmailUtil = inptEmailUtil.value.trim()
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(verifEmailUtil)) {
            inptEmailUtil.setAttribute('class', 'form-control is-valid')
            emailVerif = true

            activationBtnInscription()
        } else if (!emailRegex.test(verifEmailUtil)) {
            inptEmailUtil.setAttribute('class', 'form-control is-invalid')
        }
    })

    //--------------------------ZONE VERIF PWD UTIL-------------------------------------
    inptPwdUtil.addEventListener('input', function () {
        let verifPwdUtil = inptPwdUtil.value
        scorePwd = 0
        document.getElementById('divJaugeFaiblePwdUtil').setAttribute('class', ' d-none')
        document.getElementById('divJaugeMoyenPwdUtil').setAttribute('class', 'd-none')
        document.getElementById('divJaugeFortPwdUtil').setAttribute('class', 'd-none')


        // verifier la taille du mot de passe
        if (verifPwdUtil.length >= 9) {
            scorePwd += 2
            console.log('pwd9');


        } else if (verifPwdUtil.length >= 6) {
            scorePwd += 1
            console.log('pwd6');


        }


        // verifier si il y a un chiffre
        if (/\d/.test(verifPwdUtil)) {
            console.log('pwdChiffre');
            scorePwd += 1

        }

        // verifier si il y a un caractere special
        const symbolRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        if (symbolRegex.test(verifPwdUtil)) {
            scorePwd += 1
            console.log('pwdCaractereSpecial');


        }
        switch (scorePwd) {
            case 1:
                console.log('score de 1');
                document.getElementById('divJaugeFaiblePwdUtil').setAttribute('class', 'ms-3 me-3 ps-3 pe-3 bg-danger rounded-pill')
                inptPwdUtil.setAttribute('class', 'form-control is-invalid')

                break;
            case 2:
                console.log('score de 2');
                document.getElementById('divJaugeFaiblePwdUtil').setAttribute('class', 'ms-3 me-3 ps-3 pe-3 bg-danger rounded-pill')
                inptPwdUtil.setAttribute('class', 'form-control is-invalid')
                break;
            case 3:
                console.log('score de 3');
                document.getElementById('divJaugeFaiblePwdUtil').setAttribute('class', 'ms-3 me-3 ps-3 pe-3 bg-danger rounded-pill')
                document.getElementById('divJaugeMoyenPwdUtil').setAttribute('class', 'ms-3 me-3 ps-3 pe-3 bg-warning rounded-pill')
                inptPwdUtil.setAttribute('class', 'form-control is-valid')
                pwdConfirm = true

                activationBtnInscription()
                break;
            case 4:
                console.log('score de 4');
                document.getElementById('divJaugeFaiblePwdUtil').setAttribute('class', 'ms-3 me-3 ps-3 pe-3 bg-danger rounded-pill')
                document.getElementById('divJaugeMoyenPwdUtil').setAttribute('class', 'ms-3 me-3 ps-3 pe-3 bg-warning rounded-pill')
                document.getElementById('divJaugeFortPwdUtil').setAttribute('class', 'ms-3 me-3 ps-3 pe-3 bg-success rounded-pill')
                inptPwdUtil.setAttribute('class', 'form-control is-valid')
                pwdConfirm = true

                activationBtnInscription()
                break;

            default:
                break;
        }


    })

    //--------------------------ZONE VERIF ENTRE PWD ET VERIF PWD UTIL-------------------------------------
    inptVerifPwdUtil.addEventListener('input', function () {
        if (inptPwdUtil.value == inptVerifPwdUtil.value) {
            inptVerifPwdUtil.setAttribute('class', 'form-control is-valid')
            console.log('bon mdp');

            pwdVerif = true
            activationBtnInscription()
        } else {
            inptVerifPwdUtil.setAttribute('class', 'form-control is-invalid')
        }


    })


}

function boutonInscription() {





    document.getElementById('btnCreaUtil').addEventListener('click', function () {
        const pwdVerifBDD = document.getElementById('inputPwdUtil').value.trim()
        const emailVerifBDD = document.getElementById('inputEmailUtil').value.trim()
        const nameVerifBDD = document.getElementById('inputNomUtil').value.trim()

        const userData = {
            nom: nameVerifBDD,
            mail: emailVerifBDD,
            pwd: pwdVerifBDD
        };


        let usersLocal = JSON.parse(localStorage.getItem('listeUsers')) || []
        let nameExists = usersLocal.some(user => user.nom === nameVerifBDD);
        let emailExists = usersLocal.some(user => user.mail === emailVerifBDD);

        if (nameExists) {
            alert(`Le nom d'utilisateur : ${nameVerifBDD} existe déja, veuillez en utiliser un autre`);

        } else if (emailExists) {
            alert(`L'email : ${emailVerifBDD} existe déja, veuillez en utiliser un autre`);

        } else {
            usersLocal.push(userData)
            localStorage.setItem('listeUsers', JSON.stringify(usersLocal))
            alert("Félicitation, vous êtes inscrit, vous pouvez maintenant vous connecter!")
            document.getElementById('mainContent').remove()
            mainConnexion()
        }


    })
}


function activationBtnInscription() {
    if (pwdVerif && pwdConfirm && emailVerif && nameVerif) {
        document.getElementById('btnCreaUtil').disabled = false

    }
}

function BtnPageConnexion() {
    document.getElementById('btnCreaConnexion').addEventListener('click', function () {
        const pwdVerifBDD = document.getElementById('inputPwdConnexion').value.trim()
        const emailVerifBDD = document.getElementById('inputEmailConnexion').value.trim()

        let usersLocal = JSON.parse(localStorage.getItem('listeUsers'))

        let emailSession = ''
        let nomSession = ''
        for (let index = 0; index < usersLocal.length; index++) {

            if (usersLocal[index].mail == emailVerifBDD && usersLocal[index].pwd == pwdVerifBDD) {
                emailSession = usersLocal[index].mail
                nomSession = usersLocal[index].nom

                const userSession = {
                    nom: nomSession,
                    mail: emailSession
                }
                sessionStorage.removeItem('userSession')
                sessionStorage.setItem('userSession', JSON.stringify(userSession))
                alert("Félicitation, vous êtes maintenant vous connecté!")
                document.getElementById('mainContent').remove()
                mainProfil()
                break;

            } else {
                console.log("CACA");

            }

        }

    })
}

function gestionProfil() {
    //Récupération et assignation des nom et mail de l'utilisateur en session storage
    const userSession = JSON.parse(sessionStorage.getItem('userSession'));

    document.getElementById('inputNameProfil').value = userSession.nom;
    document.getElementById('inputEmailProfil').value = userSession.mail;
    let tailleJeuSelect = ''
    let typeJeuSelect = ''
    // fonction du select pour attibuer une image en fonction de l'option selectionné
    document.getElementById('selectTypeJeu').addEventListener('change', function () {
        typeJeuSelect = document.getElementById('selectTypeJeu').value

        document.getElementById('imageProfilTypeJeu').src = `images/jeu/${typeJeuSelect}/${typeJeuSelect}.png`
    })

    // fonction du select pour choisir la taille du jeu en fonction de l'option selectionné
    document.getElementById('selectTailleJeu').addEventListener('change', function () {
        tailleJeuSelect = document.getElementById('selectTailleJeu').value

    })

    //Fonction du bouton pour valider les parametres et changer de page
    document.getElementById('buttonProfil').addEventListener('click', function () {
        //Si la personne est connectée, les parametres sont enrgistrer dans la session


        if (userSession.mail && userSession.nom) {

            sessionStorage.removeItem('tailleMemory')
            sessionStorage.removeItem('typeMemory')
            sessionStorage.setItem('tailleMemory', tailleJeuSelect)
            sessionStorage.setItem('typeMemory', typeJeuSelect)
            document.getElementById('mainContent').remove()
            mainJouer()
        } else {
            alert("Veuillez vous connecter avant de commencer à jouer!")
        }
    })

    //Récupération des derniers score du joueur

}

function gestionMemory() {
    //--------------------------Génération des images aleatoires-------------------------------------
    //Déclarations de constantes
    const tailleSessionMemory = sessionStorage.getItem('tailleMemory').split('*')
    const valTailleSessionMemory = tailleSessionMemory[0] * tailleSessionMemory[1]
    let valTailleDiviseSessionMemory = (valTailleSessionMemory) / 2
    const typeSessionMemory = sessionStorage.getItem('typeMemory').valueOf()
    const userSessionFront = sessionStorage.getItem('userSession')
    const parsed = JSON.parse(userSessionFront)
    nbrCoupsPartieMemory = 0
    let spanNbreCoups = document.getElementById('nbresDeCoups')
    spanNbreCoups.textContent = `Nombres de coups : ${nbrCoupsPartieMemory}`

    let image1 = ''
    let image2 = ''
    let image1Id = ''
    let image2Id = ''
    let count = 0
    let checkFinPartie = 0


    //--------------------------Création du tableau de valeurs-------------------------------------
    //Création nouveau tableau avec chaques valeurs mises deux fois
    let aTableauMemory = new Array()
    for (let index = 0; index < valTailleDiviseSessionMemory; index++) {
        aTableauMemory.push(index)
        aTableauMemory.push(index)

    }

    //Reorganistation du tableau en random
    for (let index = 0; index < valTailleSessionMemory; index++) {

        let nbreRandom = Math.floor(Math.random() * ((valTailleSessionMemory)))
        let l = aTableauMemory[index]
        aTableauMemory[index] = aTableauMemory[nbreRandom]
        aTableauMemory[nbreRandom] = l
    }

    //--------------------------Changement des images quand on clic-------------------------------------


    //Quand on clique sur une image, une autre se charge
    $('.imgMemory').on('click', function () {
        let elem = this
        let newVal = aTableauMemory[elem.id] + 1


        elem.src = `images/jeu/${typeSessionMemory}/${newVal}.jpg`

        if (image1 === '') {
            image1 = newVal
            image1Id = elem.id
            nbrCoupsPartieMemory++
            spanNbreCoups.textContent = `Nombres de coups : ${nbrCoupsPartieMemory}`
            count++
        } else {
            image2 = newVal
            image2Id = elem.id
            count++
        }

        if (count == 2) {
            let elem1 = document.getElementById(image1Id);
            let elem2 = document.getElementById(image2Id);

            if (image1 == image2) {

                setTimeout(function () {
                    elem1.src = 'images/icons/check.svg'
                    elem1.className = 'img-fluid imgMemory checkMemory'
                    elem2.src = 'images/icons/check.svg'
                    elem2.className = 'img-fluid imgMemory checkMemory'
                    count = 0
                    image1 = ''
                    image2 = ''
                    image1Id = ''
                    image2Id = ''
                    checkFinPartie++
                    console.log("check : " + checkFinPartie);
                    console.log("nombre pour finir : " + valTailleDiviseSessionMemory);

                    if (checkFinPartie == valTailleDiviseSessionMemory) {
                        alert(`PARTIE TERMINEE!!! Vous avez réussi avec un score de : ${nbrCoupsPartieMemory}, votre score va etre enregistrer dans votre navigateur.`)
                        // Récupération des informations de la partie Pseudo, score, taille, type et date
                        let aujourdHui = new Date();
                        let jour = aujourdHui.getDate();
                        let mois = aujourdHui.getMonth() + 1;
                        let annee = aujourdHui.getFullYear();

                        let dateDuJour = `${jour}/${mois}/${annee}`;
                        const tailleSessionMemoryFinPartie = sessionStorage.getItem('tailleMemory').valueOf()
                        const typeSessionMemoryFinPartie = sessionStorage.getItem('typeMemory').valueOf()
                        const nomSessionMemoryFinPartie = parsed.nom
                        const scoreSessionMemoryFinPartie = nbrCoupsPartieMemory
                        const SessionMemoryFinPartie = dateDuJour

                        let scores = {
                            pseudo: nomSessionMemoryFinPartie,
                            score: scoreSessionMemoryFinPartie,
                            taille: tailleSessionMemoryFinPartie,
                            type: typeSessionMemoryFinPartie,
                            date: SessionMemoryFinPartie,
                        }

                        const scoresStr = localStorage.getItem('scoresMemory') || '[]';
                        const scoresLocal = JSON.parse(scoresStr);
                        scoresLocal.push(scores);
                        localStorage.setItem('scoresMemory', JSON.stringify(scoresLocal));
                    }

                }, 1000)
            } else {
                setTimeout(function () {
                    count = 0
                    image1 = ''
                    image2 = ''
                    image1Id = ''
                    image2Id = ''
                    elem1.src = 'images/icons/question.svg'
                    elem2.src = 'images/icons/question.svg'
                }, 1000)

            }

        }
        //--------------------------Ajout des scores dans le local storage-------------------------------------






    })
    //--------------------------restart du jeu-------------------------------------
    //Quand on appuie sur une touche le jeu redemarre
    document.addEventListener('keydown', (event) => {
        const key = event.key;
        const code = event.code;

        if (key === ' ') {
            document.getElementById('mainContent').remove()
            mainJouer()
        }
    })
}

