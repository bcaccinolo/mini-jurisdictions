defmodule Juris.UseCases.GetFuzzySearch do

  def call(query) do
    Jurisdiction.search(query) |> Jason.encode!
  end

end
