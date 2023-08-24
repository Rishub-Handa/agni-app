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
        'title': 'Wake Up',
        'group': 'Lifestyle',
        'skills': 'Breathing', 
        'duration': '8min',
        'level': 'Beginner', 
        'coverImage': images.wakeUpCardImage,
        'audioFile': audio.wakeupRoutineAudio,
        'description': 'A mental and physical break from a busy day. \n\n Begin on a mat or soft surface.', 
        'keyPoses': ['ChildsPose', 'ChildsPose']
    }, 
    'Posture': {
        'title': 'Posture',
        'group': 'Lifestyle',
        'skills': 'Balance',
        'duration': '5min',
        'level': 'Beginner',
        'coverImage': images.postureCardImage,
        'audioFile': audio.postureRoutineAudio,
        'description': 'A mental and physical break from a busy day. \n\n Begin on a mat or soft surface.',
        'keyPoses': ['ChildsPose', 'ChildsPose']
    },
    'MiddayBreak': {
        'title': 'Midday Break',
        'group': 'Lifestyle',
        'skills': 'Breathing',
        'duration': '10min',
        'level': 'Beginner',
        'coverImage': images.middayBreakCardImage,
        'audioFile': audio.middayBreakRoutineAudio,
        'description': 'A mental and physical break from a busy day. \n\n Begin on a mat or soft surface.',
        'keyPoses': ['ChildsPose', 'ChildsPose', 'ChildsPose', 'ChildsPose', 'ChildsPose', 'ChildsPose', 'ChildsPose', 'ChildsPose']
    },
    'BeforeActivity': {
        'title': 'Before Activity',
        'group': 'Lifestyle',
        'skills': 'Flexibility',
        'duration': '8min',
        'level': 'Beginner',
        'coverImage': images.beforeActivityCardImage,
        'audioFile': audio.preactivityRoutineAudio,
        'description': 'A mental and physical break from a busy day. \n\n Begin on a mat or soft surface.',
        'keyPoses': ['ChildsPose', 'ChildsPose']
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
    'ChildsPose': {
        'title': 'Child\'s Pose',
        'image': images.childsPoseIcon,
    }

}




export { routines, poses };