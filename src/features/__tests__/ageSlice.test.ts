import reducer, {
  toggleExistAge,
  setAge,
  setDescription,
  AgeState,
} from 'src/features/ageSlice';

const defaultState: AgeState = {
  exist: false,
  value: undefined,
  other: '',
  desc: '',
};

describe('ageSlice', () => {
  describe('when previous state is undefined,', () => {
    it('returns initialState.', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(defaultState);
    });

    describe('toggleExistAge', () => {
      it('toggles exist.', () => {
        const initialState = { ...defaultState };

        const state = reducer(initialState, toggleExistAge());

        expect(state.exist).toEqual(!defaultState.exist);
      });
    });

    describe('setAge', () => {
      it('sets value.', () => {
        const initialState = { ...defaultState };

        const age: string = '10';

        const state = reducer(initialState, setAge(age));

        expect(state.value).toEqual(age);
      });
    });

    describe('setDescription', () => {
      it('sets description.', () => {
        const initialState = { ...defaultState };

        const desc: string = 'asdf';

        const state = reducer(initialState, setDescription(desc));

        expect(state.desc).toEqual(desc);
      });
    });
  });
});
