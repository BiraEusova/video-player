import {assign, createMachine} from 'xstate';

const modalSizes = {
	big: 1000,
	small: 400
}
export const videoModalMachine = createMachine({
		id: 'video-modal',
		context: {
			modalSize: modalSizes.big,
		},
		initial: 'closed',
		states: {
			type: 'atomic',
			closed: {
				on: {
					OPEN: {
						target: 'opened',
						actions: ['log']
					}
				}
			},
			opened: {
				type: 'parallel',
				states: {
					size: {
						initial: 'increased',
						states: {
							increased: {
								on: {
									BTN_SIZE: {
										target: 'decreased',
										actions: ['setSmallModalSize', 'log']
									}
								}
							},
							decreased: {
								on: {
									BTN_SIZE: {
										target: 'increased',
										actions: ['setBigModalSize', 'log']
									}
								}
							}
						}
					},
					playback: {
						initial: 'playing',
						states: {
							playing: {
								on: {
									BTN_PLAY: { target: 'paused'}
								}
							},
							paused: {
								on: {
									BTN_PLAY: { target: 'playing'}
								}
							}
						}
					},
					muting: {
						initial: 'muted',
						states: {
							muted: {
								on: {
									BTN_MUTE: { target: 'unmuted'}
								}
							},
							unmuted: {
								on: {
									BTN_MUTE: { target: 'muted'}
								}
							}
						}
					}
				},
				on: {
					CLOSE: { target: 'closed'}
				}
			}
		}
	},
{
	actions: {
		setSmallModalSize: assign({modalSize: () => modalSizes.small}),
		setBigModalSize: assign({modalSize: () => modalSizes.big}),
		log: (context, event) => {
			console.log('currentSize', context.context.modalSize);
		}
	}
});