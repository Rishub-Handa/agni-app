import { images, audio } from '../constants'

const routines = {
    'Foundations-Day1': {
        'title': 'Day 1',
        'group': 'Foundations',
        'skills': 'Flexibility', 
        'duration': '5min',
        'level': 'Beginner', 
        'coverImage': images.forwardFoldPoseImage,
        'audioFile': undefined
    }, 
    'WakeUp': {
        'title': 'Wake Up',
        'group': 'Lifestyle',
        'skills': 'Breathing', 
        'duration': '8min',
        'level': 'Beginner', 
        'coverImage': images.wakeUpCardImage,
        'audioFile': audio.wakeupRoutineAudio
    }, 
    'Posture': {
        'title': 'Posture',
        'group': 'Lifestyle',
        'skills': 'Balance',
        'duration': '5min',
        'level': 'Beginner',
        'coverImage': images.postureCardImage,
        'audioFile': audio.postureRoutineAudio
    },
    'MiddayBreak': {
        'title': 'Midday Break',
        'group': 'Lifestyle',
        'skills': 'Breathing',
        'duration': '10min',
        'level': 'Beginner',
        'coverImage': images.middayBreakCardImage,
        'audioFile': audio.middayBreakRoutineAudio
    },
    'BeforeActivity': {
        'title': 'Before Activity',
        'group': 'Lifestyle',
        'skills': 'Flexibility',
        'duration': '8min',
        'level': 'Beginner',
        'coverImage': images.beforeActivityCardImage,
        'audioFile': audio.preactivityRoutineAudio
    },
    'TreePose': {
        'title': 'Tree Pose',
        'group': 'Progression',
        'skills': 'Balance',
        'duration': '5min',
        'level': 'Beginner',
        'coverImage': images.treePoseImage,
        'audioFile': undefined
    },
    'ForwardFold': {
        'title': 'Forward Fold',
        'group': 'Progression',
        'skills': 'Flexibility',
        'duration': '5min',
        'level': 'Beginner',
        'coverImage': images.forwardFoldPoseImage,
        'audioFile': undefined
    },
    
}

export default routines;