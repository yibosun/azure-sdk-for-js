/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const ImageTemplateSource: msRest.CompositeMapper = {
  serializedName: "ImageTemplateSource",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    uberParent: "ImageTemplateSource",
    className: "ImageTemplateSource",
    modelProperties: {
      type: {
        required: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ImageTemplateCustomizer: msRest.CompositeMapper = {
  serializedName: "ImageTemplateCustomizer",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    uberParent: "ImageTemplateCustomizer",
    className: "ImageTemplateCustomizer",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        required: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ImageTemplateDistributor: msRest.CompositeMapper = {
  serializedName: "ImageTemplateDistributor",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    uberParent: "ImageTemplateDistributor",
    className: "ImageTemplateDistributor",
    modelProperties: {
      runOutputName: {
        required: true,
        serializedName: "runOutputName",
        constraints: {
          Pattern: /^[A-Za-z0-9-_]{1,64}$/
        },
        type: {
          name: "String"
        }
      },
      artifactTags: {
        serializedName: "artifactTags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      type: {
        required: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProvisioningError: msRest.CompositeMapper = {
  serializedName: "ProvisioningError",
  type: {
    name: "Composite",
    className: "ProvisioningError",
    modelProperties: {
      provisioningErrorCode: {
        serializedName: "provisioningErrorCode",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ImageTemplateLastRunStatus: msRest.CompositeMapper = {
  serializedName: "ImageTemplateLastRunStatus",
  type: {
    name: "Composite",
    className: "ImageTemplateLastRunStatus",
    modelProperties: {
      startTime: {
        serializedName: "startTime",
        type: {
          name: "DateTime"
        }
      },
      endTime: {
        serializedName: "endTime",
        type: {
          name: "DateTime"
        }
      },
      runState: {
        serializedName: "runState",
        type: {
          name: "String"
        }
      },
      runSubState: {
        serializedName: "runSubState",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Resource: msRest.CompositeMapper = {
  serializedName: "Resource",
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ImageTemplate: msRest.CompositeMapper = {
  serializedName: "ImageTemplate",
  type: {
    name: "Composite",
    className: "ImageTemplate",
    modelProperties: {
      ...Resource.type.modelProperties,
      source: {
        required: true,
        serializedName: "properties.source",
        type: {
          name: "Composite",
          className: "ImageTemplateSource"
        }
      },
      customize: {
        serializedName: "properties.customize",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ImageTemplateCustomizer"
            }
          }
        }
      },
      distribute: {
        required: true,
        serializedName: "properties.distribute",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ImageTemplateDistributor"
            }
          }
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      provisioningError: {
        readOnly: true,
        serializedName: "properties.provisioningError",
        type: {
          name: "Composite",
          className: "ProvisioningError"
        }
      },
      lastRunStatus: {
        readOnly: true,
        serializedName: "properties.lastRunStatus",
        type: {
          name: "Composite",
          className: "ImageTemplateLastRunStatus"
        }
      }
    }
  }
};

export const ImageTemplateIsoSource: msRest.CompositeMapper = {
  serializedName: "ISO",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ImageTemplateSource.type.polymorphicDiscriminator,
    uberParent: "ImageTemplateSource",
    className: "ImageTemplateIsoSource",
    modelProperties: {
      ...ImageTemplateSource.type.modelProperties,
      sourceURI: {
        required: true,
        serializedName: "sourceURI",
        type: {
          name: "String"
        }
      },
      sha256Checksum: {
        required: true,
        serializedName: "sha256Checksum",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ImageTemplatePlatformImageSource: msRest.CompositeMapper = {
  serializedName: "PlatformImage",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ImageTemplateSource.type.polymorphicDiscriminator,
    uberParent: "ImageTemplateSource",
    className: "ImageTemplatePlatformImageSource",
    modelProperties: {
      ...ImageTemplateSource.type.modelProperties,
      publisher: {
        serializedName: "publisher",
        type: {
          name: "String"
        }
      },
      offer: {
        serializedName: "offer",
        type: {
          name: "String"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ImageTemplateShellCustomizer: msRest.CompositeMapper = {
  serializedName: "shell",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ImageTemplateCustomizer.type.polymorphicDiscriminator,
    uberParent: "ImageTemplateCustomizer",
    className: "ImageTemplateShellCustomizer",
    modelProperties: {
      ...ImageTemplateCustomizer.type.modelProperties,
      script: {
        serializedName: "script",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ImageTemplateManagedImageDistributor: msRest.CompositeMapper = {
  serializedName: "managedImage",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ImageTemplateDistributor.type.polymorphicDiscriminator,
    uberParent: "ImageTemplateDistributor",
    className: "ImageTemplateManagedImageDistributor",
    modelProperties: {
      ...ImageTemplateDistributor.type.modelProperties,
      imageId: {
        required: true,
        serializedName: "imageId",
        type: {
          name: "String"
        }
      },
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ImageTemplateSharedImageDistributor: msRest.CompositeMapper = {
  serializedName: "sharedImage",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ImageTemplateDistributor.type.polymorphicDiscriminator,
    uberParent: "ImageTemplateDistributor",
    className: "ImageTemplateSharedImageDistributor",
    modelProperties: {
      ...ImageTemplateDistributor.type.modelProperties,
      galleryImageId: {
        required: true,
        serializedName: "galleryImageId",
        type: {
          name: "String"
        }
      },
      replicationRegions: {
        required: true,
        serializedName: "replicationRegions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ImageTemplateUpdateParameters: msRest.CompositeMapper = {
  serializedName: "ImageTemplateUpdateParameters",
  type: {
    name: "Composite",
    className: "ImageTemplateUpdateParameters",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const SubResource: msRest.CompositeMapper = {
  serializedName: "SubResource",
  type: {
    name: "Composite",
    className: "SubResource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RunOutput: msRest.CompositeMapper = {
  serializedName: "RunOutput",
  type: {
    name: "Composite",
    className: "RunOutput",
    modelProperties: {
      ...SubResource.type.modelProperties,
      artifactId: {
        serializedName: "properties.artifactId",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationDisplay: msRest.CompositeMapper = {
  serializedName: "Operation_display",
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: msRest.CompositeMapper = {
  serializedName: "Operation",
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      },
      origin: {
        serializedName: "origin",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Object"
        }
      }
    }
  }
};

export const ApiErrorBase: msRest.CompositeMapper = {
  serializedName: "ApiErrorBase",
  type: {
    name: "Composite",
    className: "ApiErrorBase",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const InnerError: msRest.CompositeMapper = {
  serializedName: "InnerError",
  type: {
    name: "Composite",
    className: "InnerError",
    modelProperties: {
      exceptiontype: {
        serializedName: "exceptiontype",
        type: {
          name: "String"
        }
      },
      errordetail: {
        serializedName: "errordetail",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApiError: msRest.CompositeMapper = {
  serializedName: "ApiError",
  type: {
    name: "Composite",
    className: "ApiError",
    modelProperties: {
      details: {
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ApiErrorBase"
            }
          }
        }
      },
      innererror: {
        serializedName: "innererror",
        type: {
          name: "Composite",
          className: "InnerError"
        }
      },
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ImageTemplateListResult: msRest.CompositeMapper = {
  serializedName: "ImageTemplateListResult",
  type: {
    name: "Composite",
    className: "ImageTemplateListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ImageTemplate"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RunOutputCollection: msRest.CompositeMapper = {
  serializedName: "RunOutputCollection",
  type: {
    name: "Composite",
    className: "RunOutputCollection",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RunOutput"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationListResult: msRest.CompositeMapper = {
  serializedName: "OperationListResult",
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const discriminators = {
  'ImageTemplateSource' : ImageTemplateSource,
  'ImageTemplateCustomizer' : ImageTemplateCustomizer,
  'ImageTemplateDistributor' : ImageTemplateDistributor,
  'ImageTemplateSource.ISO' : ImageTemplateIsoSource,
  'ImageTemplateSource.PlatformImage' : ImageTemplatePlatformImageSource,
  'ImageTemplateCustomizer.shell' : ImageTemplateShellCustomizer,
  'ImageTemplateDistributor.managedImage' : ImageTemplateManagedImageDistributor,
  'ImageTemplateDistributor.sharedImage' : ImageTemplateSharedImageDistributor
};