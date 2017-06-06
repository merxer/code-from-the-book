f = fn (distance) ->
  :math.sqrt(2 * 9.8 * distance)
end

IO.puts f.(20)
