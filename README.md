# My Protobuf Project

This repository contains the Protobuf definitions for MyCompany's APIs.

## Prerequisites

*   [Buf CLI](https://docs.buf.build/installation)
*   Go Protobuf Plugins:
    *   `go install google.golang.org/protobuf/cmd/protoc-gen-go@latest`
    *   `go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest`
*   Rust Protobuf Plugins:
    *   `cargo install protoc-gen-prost`
    *   `cargo install tonic-build --features=prost` (installs `protoc-gen-tonic`)

Ensure the `protoc-gen-*` binaries are in your system's `PATH`.

## Structure

*   `proto/`: Contains the raw `.proto` definition files, organized by domain and version.
*   `gen/`: Contains the generated code output.
    *   `gen/go/`: Generated Go code.
    *   `gen/rust/`: Generated Rust code.
*   `buf.yaml`: Buf module configuration, linting, and breaking change rules.
*   `buf.gen.yaml`: Buf code generation configuration.

## Usage

### Linting

Check for style and consistency issues:

```powershell
podman run --rm -v "${PWD}:/workspace" --workdir /workspace bufbuild/buf lint
```

### Generate code
```powershell
podman run --rm -v "${PWD}:/workspace" --workdir /workspace bufbuild/buf generate
```
