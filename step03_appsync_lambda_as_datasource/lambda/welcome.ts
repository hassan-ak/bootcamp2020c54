type AppSyncEvent = {
  info: {
    fieldName: string;
  };
};

exports.handler = async (event: AppSyncEvent) => {
  if (event.info.fieldName == "welcome") {
    return "Welcome form Async lambda welcome query";
  } else if (event.info.fieldName == "hello") {
    return "Welcome form Async lambda hello query";
  } else {
    return "Not Found";
  }
};
