import {
  toggleExistAge,
  setAge,
  setDescription,
  getExistAge,
  getAge,
  getDescription,
} from 'src/features/ageSlice';

import reducer from 'src/features/ageSlice';

import { SingleProps } from 'src/types/Props';

import prepareMockReduxWrapper from 'src/features/__tests__/prepareMockReduxWrapper';

const defaultState: SingleProps<string> = {
  exist: false,
  value: undefined,
  other: '',
  desc: '',
};

describe('ageSlice', () => {
  describe('when previous state is undefined, ', () => {
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

    describe('getExistAge', () => {
      let store: any;

      beforeEach(() => {
        const [_, store] = prepareMockReduxWrapper();

        store({

        })
      });

      it('gets existAge.', () => {
        const exist = store.getExistAge({});

        expect(exist).toEqual(false);
      });
    });

    describe('getAge', () => {
      let store: any;

      beforeEach(() => {
        store = prepareMockReduxWrapper();
      });

      it('gets age.', () => {
        const age = store.getAge();

        expect(age).toEqual(undefined);
      });
    });

    describe('getDescription', () => {
      let store: any;

      beforeEach(() => {
        store = prepareMockReduxWrapper();
      });

      it('gets description.', () => {
        const desc = store.getDescription();

        expect(desc).toEqual('');
      });
    });
  });
});