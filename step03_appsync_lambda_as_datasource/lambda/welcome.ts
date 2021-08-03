type AppSyncEvent = {
  info: {
    fieldName: string;
  };
  arguments: {
    product: Product;
  };
};

type Product = {
  name: String;
  price: Number;
};

exports.handler = async (event: AppSyncEvent) => {
  if (event.info.fieldName == "welcome") {
    return "Welcome form Async lambda welcome query";
  } else if (event.info.fieldName == "hello") {
    return "Welcome form Async lambda hello query";
  } else if (event.info.fieldName == "addProduct") {
    console.log(" >>> Event Data = ", event.arguments.product);
    return "Product Data" + event.arguments.product.name;
  } else {
    return "Not Found";
  }
};
