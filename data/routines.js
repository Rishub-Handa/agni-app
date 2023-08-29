import { images, audio } from '../constants'

const routines = {
    'Foundations-Day1': {
        'title': 'Day 1',
        'group': 'Foundations',
        'skills': 'Flexibility', 
        'duration': '5min',
        'level': 'Beginner', 
        'coverImage': images.forwardFoldPoseImage,
        'audioFile': undefined,
        'description': ''
    }, 
    'WakeUp': {
        'title': 'Waking Up',
        'group': 'Lifestyle',
        'skills': 'Breathing', 
        'duration': '8min',
        'level': 'Beginner', 
        'coverImage': images.wakeUpCardImage,
        'audioFile': audio.wakeupRoutineAudio,
        'description': 'Start the day fresh. \n\n Begin laying down on your bed.', 
        'keyPoses': ['KneesToChest', 'SupineTwist']
    }, 
    'Posture': {
        'title': 'Posture',
        'group': 'Lifestyle',
        'skills': 'Balance',
        'duration': '5min',
        'level': 'Beginner',
        'coverImage': images.postureCardImage,
        'audioFile': audio.postureRoutineAudio,
        'description': 'Protect your back with good posture. \n\n Begin laying on a mat or soft surface.',
        'keyPoses': ['InvertedTabletop', 'WarriorA']
    },
    'MiddayBreak': {
        'title': 'Midday Break',
        'group': 'Lifestyle',
        'skills': 'Breathing',
        'duration': '10min',
        'level': 'Beginner',
        'coverImage': images.middayBreakCardImage,
        'audioFile': audio.middayBreakRoutineAudio,
        'description': 'A mental and physical break from a busy day. \n\n Begin seated on a mat or soft surface.',
        'keyPoses': ['ToeTouch', 'Windmills', 'TablePose', 'ChildsPose', 'UpwardDog']
    },
    'BeforeActivity': {
        'title': 'Before Activity',
        'group': 'Lifestyle',
        'skills': 'Flexibility',
        'duration': '8min',
        'level': 'Beginner',
        'coverImage': images.beforeActivityCardImage,
        'audioFile': audio.preactivityRoutineAudio,
        'description': 'Warm up your joints and muscles before strenuous physical activity. \n\n Begin standing on a mat or soft surface.',
        'keyPoses': ['LateralStretch', 'BackTwist', 'SingleLegToeTouch', 'Butterfly', 'UpwardDog', 'DownwardDog', 'TablePose']
    },
    'TreePose': {
        'title': 'Tree Pose',
        'group': 'Progression',
        'skills': 'Balance',
        'duration': '5min',
        'level': 'Beginner',
        'coverImage': images.treePoseImage,
        'audioFile': undefined,
        'description': 'A mental and physical break from a busy day. \n\n Begin on a mat or soft surface.',
        'keyPoses': ['ChildsPose', 'ChildsPose']
    },
    'ForwardFold': {
        'title': 'Forward Fold',
        'group': 'Progression',
        'skills': 'Flexibility',
        'duration': '5min',
        'level': 'Beginner',
        'coverImage': images.forwardFoldPoseImage,
        'audioFile': undefined,
        'description': 'A mental and physical break from a busy day. \n\n Begin on a mat or soft surface.',
        'keyPoses': ['ChildsPose', 'ChildsPose']
    },
    
}

const poses = {

    'KneesToChest': {
        'title': 'Knee Hug',
        'image': images.kneeHugPoseIcon,
        'description': 'Begin by laying on your back. Bring the knees into the chest and hug them by wrapping the arms around your calves. Feel the release in your glutes and hamstrings. '
    },
    'SupineTwist': {
        'title': 'Supine Twist',
        'image': images.supineTwistPoseIcon,
        'description': 'Start by laying down on your back in the inverted tabletop position - legs up in the air and knees bent at 90 degrees. Spread your arms wide beside the body. Twist from the hips, and let your knees fall slowly to the left side as your right hip comes up. Keep both shoulders on the mat, and gaze in the opposite direction of the knees. Feel the soft twist in your neck and spine. Repeat on the other side. '
    },

    'InvertedTabletop': {
        'title': 'Inverted Tabletop',
        'image': images.invertedTablePoseIcon,
        'description': 'Start by laying down on your back. Bring your legs into the air, keeping the knees directly above hips. Bend the knees 90 degrees so the calves are flat and parallel above the ground. Arms are beside the body. Feel the lower abdomen engage. '
    },
    'WarriorA': {
        'title': 'Warrior A',
        'image': images.warriorAPoseIcon,
        'description': 'Start standing with both feet together. Step one foot back in a wide stance, and bend the front knee into a lunge, while the back leg straight. Keep the back foot firm on the ground, facing 45 degrees from the front. Look forward, and square the hips forward. Reach your straight arms up, keeping your biceps by the ears. Tighten the glutes, hips, and core. '
    },

    'LateralStretch': { // Arms Side to Side? 
        'title': 'Side Stretch',
        'image': images.sideToSidePoseIcon,
        'description': 'Start standing neutral. Reach both hands up above the head into namaste. Slowly bend the torso and hips from side to side. Feel the stretch in your outer hips and back. '
    },
    'BackTwist': { // TODO 
        'title': 'Back Twist',
        'image': images.childsPoseIcon,
        'description': 'Start standing neutral., Raise the arms spread beside the body, dynamically twist the torso from side to side. Keep the hands on the hips if you’re prone to dizziness. '
    },
    // 'AnkleFlexion': {
    //     'title': 'Ankle Flexion',
    //     'image': images.childsPoseIcon,
    //     'description': 'beep boop'
    // },
    'SingleLegToeTouch': { // TODO
        'title': 'Single Leg Fold',
        'image': images.childsPoseIcon,
        'description': 'Start sitting down on a mat with your legs together stretched in front. Bring your right foot into the inner side of the left thigh, bending at the knee. Stretch your hands up above you and fold forward on the exhale, hinging from the hips. Grab your toes, ankles, or knees, bring the forehead down toward the knee. Feel the stretch in the back of your thighs and glues. '
    },
    'Butterfly': {
        'title': 'Butterfly',
        'image': images.butterflyPoseIcon,
        'description': 'Start sitting down on a mat. Bring the heels together, soles of the feet touching. Grab onto your feet and pull gently to straighten the arms and back. Slowly flap the knees up and down to stretch the hips. '
    }, 
    'UpwardDog': {
        'title': 'Upward Dog',
        'image': images.upwardDogPoseIcon,
        'description': 'Start by laying on your stomach on a mat. Place your hands beside the chest. Press straight into the mat to lift your chest and torso up off the ground, straightening your arms, while keeping the knees on the mat. Look upwards. '
    }, 
    'DownwardDog': {
        'title': 'Downward Dog',
        'image': images.downwardDogPoseIcon,
        'description': 'Start on all fours in table pose. Lift the knees off the ground, balancing on your hands and toes. Then move the hips back and up into the sky. Straighten your arms and legs if possible. Press the heels towards the ground, feeling a stretch in your calves. Spread your fingers and press your hands into the ground. '
    },
    'TablePose': {
        'title': 'Tabletop Pose',
        'image': images.tablePoseIcon,
        'description': 'Come onto all fours, stack the shoulders over the wrists and the hips above the knees, spread all 10 fingers wide and align the body. '
    }, 

    'ToeTouch': {
        'title': 'Forward Fold',
        'image': images.forwardFoldPoseIcon,
        'description': 'Begin with the feet shoulder-width apart. Raise the hands above the head and lengthen the spine. Hinging at the hips, fold the body forward and hold the toes, ankles, or feet with the hands. Slowly bring the forehead toward the knees, and deepen the stretch in the hamstrings with each exhale. '
    },
    'Windmills': {
        'title': 'Windmills',
        'image': images.windmillsPoseIcon,
        'description': 'Begin with the feet wider than hips-width apart. Bring the arms wide beside the body, and hinge at the hips to create a flat back, this is your center. Twisting through the spine, touch the right foot with the left hand, and bring the right hand toward the sky, above the right ear. Gaze at the right hand. Repeat the same twist on the opposite side, and switch sides, moving through the twist dynamically. '
    }, 
    'ChildsPose': {
        'title': 'Child\'s Pose',
        'image': images.childsPoseIcon,
        'description': 'Begin in table position on all fours. Keeping your knees wide, bring the toes touching together. Keeping your arms in place, slowly lower the hips into the heels and feel the arms stretch out in front of you. Bring the forehead gently to the ground and press the palms into the ground. '
    }, 



}




export { routines, poses };