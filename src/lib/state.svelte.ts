type InternalFlipState = {
	currentState: Flip.FlipState | undefined;
	target: string;
	duration: number;
};

type InternalState = {
	isUserMobile?: boolean;
	isVantaUserEnabled: boolean;
	flipState: InternalFlipState;
};

// we don't need to persist flipState, in fact that might cause issues if we reload mid-transition
const PERSISTED_KEYS: (keyof InternalState)[] = ['isUserMobile', 'isVantaUserEnabled'];

const LOCAL_STORAGE_KEY = 'appState';

// helpers to sync state with local storage
export const saveToLocalStorage = (stateObj: InternalState) => {
	if (typeof window === 'undefined' || !('localStorage' in window)) return; // SSR safe
	const toSave: Partial<InternalState> = {};
	for (const key of PERSISTED_KEYS) {
		toSave[key] = stateObj[key] as any;
	}
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toSave));
};

export const loadFromLocalStorage = (stateObj: InternalState) => {
	if (typeof window === 'undefined' || !('localStorage' in window)) return; // SSR safe
	const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
	if (savedState) {
		const parsedState = JSON.parse(savedState) as Partial<InternalState>;
		for (const key of PERSISTED_KEYS) {
			if (key in parsedState) {
				stateObj[key] = parsedState[key] as any;
			}
		}
	}
};

export const state = $state<InternalState>({
	isUserMobile: undefined, // will be set on app load
	isVantaUserEnabled: true,
	flipState: {
		currentState: undefined,
		target: '',
		duration: 0.4
	}
});

// interface for dealing with flipState
class FlipState {
	private state = state.flipState;

	get active() {
		return this.state.currentState !== undefined;
	}

	set = (state: Flip.FlipState, target: string, duration: number = 0.4) => {
		this.state.currentState = state;
		this.state.target = target;
		this.state.duration = duration;
	};

	// once consumed, we must reset the state
	get = () => ({
		currentState: this.state.currentState,
		target: this.state.target,
		duration: this.state.duration
	});

	reset = () => {
		this.state.currentState = undefined;
		this.state.target = '';
		this.state.duration = 0.4; // default duration
	};
}

export const flipState = new FlipState();
