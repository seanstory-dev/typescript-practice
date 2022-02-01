{
  /**
   * Discriminated Union - 공통적인 프로퍼티를 가지고 있으므로써 좀 더 구분하기 쉽게 만든다.
   */

  // function: login -> success, fail
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };
  type FailState = {
    result: 'fail';
    reason: string;
  };
  type LogInState = SuccessState | FailState;
  function logIn(id: string, password: string): LogInState {
    return {
      result: 'success',
      response: {
        body: 'logged in!',
      },
    };
  }

  function printLogInState(state: LogInState) {
    if (state.result === 'success') {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
