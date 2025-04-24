class FlipState {
	private currentState: Flip.FlipState | undefined = $state(undefined);
	private target: string = $state('');
	private duration: number = $state(0.4);

	get active() {
		return this.currentState !== undefined;
	}

	set = (state: Flip.FlipState, target: string, duration?: number) => {
		this.currentState = state;
		this.target = target;
		this.duration = duration ?? this.duration;
	};

	// once consumed, we must reset the state
	get = () => {
		const res = {
			currentState: this.currentState,
			target: this.target,
			duration: this.duration
		};
		this.reset();
		return res;
	};

	reset = () => {
		this.currentState = undefined;
		this.target = '';
		this.duration = 0.4;
	};
}

export const flipState = new FlipState();
