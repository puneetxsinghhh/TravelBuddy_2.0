class ApiResponse<T = any, M = any> {
  statusCode: number;
  data: T;
  message: string;
  success: boolean;
  metadata?: M | null;

  constructor(
    statusCode: number,
    data: T,
    message: string = "Success",
    metadata: M | null = null
  ) {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode >= 200 && statusCode < 400;
    this.metadata = metadata;
  }

  toJSON() {
    const response: Record<string, any> = {
      success: this.success,
      statusCode: this.statusCode,
      message: this.message,
      data: this.data,
    };

    if (this.metadata) {
      response.metadata = this.metadata;
    }

    return response;
  }
}

export default ApiResponse;
