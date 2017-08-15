$('.test-popup-link').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    },
    removalDelay: 300,
    mainClass: 'mfp-fade'
});

$('.black').on('click', function() {
    
    var new_src1 = 'images/ritm-2/Black/IMG_000.jpg';
    var new_src2 = 'images/ritm-2/Black/IMG_0176.jpg';
    var new_src3 = 'images/ritm-2/Black/IMG_0213.jpg';
    var new_src4 = 'images/ritm-2/Black/IMG_0215.jpg';
    $('.color1').attr('href', new_src1);
    $('.colour1').attr('src', new_src1);
    $('.color2').attr('href', new_src2);
    $('.colour2').attr('src', new_src2);
    $('.color3').attr('href', new_src3);
    $('.colour3').attr('src', new_src3);
    $('.color4').attr('href', new_src4);
    $('.colour4').attr('src', new_src4);
});

$('.white').on('click', function(){
    
    var new_src1 = 'images/ritm-2/White/IMG_001.jpg';
    var new_src2 = 'images/ritm-2/White/IMG_0184.jpg';
    var new_src3 = 'images/ritm-2/White/IMG_0203.jpg';
    var new_src4 = 'images/ritm-2/White/IMG_0208.jpg';
    $('.color1').attr('href', new_src1);
    $('.colour1').attr('src', new_src1);
    $('.color2').attr('href', new_src2);
    $('.colour2').attr('src', new_src2);
    $('.color3').attr('href', new_src3);
    $('.colour3').attr('src', new_src3);
    $('.color4').attr('href', new_src4);
    $('.colour4').attr('src', new_src4);
});





$(document).ready(function() {
    
    var headerHeight = $('#header').outerHeight();
    
    $('.slide').click(function(e) {
                
        var linkHref = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight
        }, 1000);
        
        e.preventDefault();
    });
});



                        /* 3D model */


        if (!Detector.webgl) {
            Detector.addGetWebGLMessage();
        }

        var container;

        var camera, controls, scene, renderer;
        var lighting, ambient, keyLight, fillLight, backLight;

        var windowHalfX = window.innerWidth / 2;
        var windowHalfY = window.innerHeight / 2;

        init();
        animate();

        function init() {

            container = document.getElementById('model');

            /* Camera */

            camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
            camera.position.z = 3;

            /* Scene */

            scene = new THREE.Scene();
            lighting = false;

            ambient = new THREE.AmbientLight(0xffffff, 1.0);
            scene.add(ambient);

            keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
            keyLight.position.set(-100, 0, 100);

            fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
            fillLight.position.set(100, 0, 100);

            backLight = new THREE.DirectionalLight(0xffffff, 1.0);
            backLight.position.set(100, 0, -100).normalize();

            /* Model */

            var mtlLoader = new THREE.MTLLoader();
            mtlLoader.setBaseUrl('model/');
            mtlLoader.setPath('model/');
            mtlLoader.load('female-croupier-2013-03-26.mtl', function (materials) {

                materials.preload();

                materials.materials.default.map.magFilter = THREE.NearestFilter;
                materials.materials.default.map.minFilter = THREE.LinearFilter;

                var objLoader = new THREE.OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.setPath('model/');
                objLoader.load('female-croupier-2013-03-26.obj', function (object) {

                    scene.add(object);

                });

            });

            /* Renderer */

            renderer = new THREE.WebGLRenderer();
            //renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(container.offsetWidth, container.offsetHeight);
            //renderer.setClearColor(new THREE.Color("hsl(0, 0%, 10%)"));

            container.appendChild(renderer.domElement);

            /* Controls */

            controls = new THREE.OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.25;
            controls.enableZoom = true;

            /* Events */

            window.addEventListener('resize', onWindowResize, false);
            window.addEventListener('keydown', onKeyboardEvent, false);

        }

        function onWindowResize() {

            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(window.innerWidth, window.innerHeight);

        }

        function onKeyboardEvent(e) {

            if (e.code === 'KeyL') {

                lighting = !lighting;

                if (lighting) {

                    ambient.intensity = 0.25;
                    scene.add(keyLight);
                    scene.add(fillLight);
                    scene.add(backLight);

                } else {

                    ambient.intensity = 1.0;
                    scene.remove(keyLight);
                    scene.remove(fillLight);
                    scene.remove(backLight);

                }

            }

        }

        function animate() {

            requestAnimationFrame(animate);

            controls.update();

            render();

        }

        function render() {

            renderer.render(scene, camera);

        }



























